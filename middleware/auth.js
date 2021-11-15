const User = require('../database/models/User');

async function validate(req) {
  try {
    // Pull the email and ID from Google's Auth off the request headers
    const { authorizationemail, authorizationid } = req.headers;

    // Try to find the user
    const user = await User.findOne({ email: authorizationemail }).exec();

    // The user exists and their ID matches the record
    if (user !== null && user._id === parseInt(authorizationid)) {
      req.user_id = user._id;
    }

    // The user exists but their ID doesn't match the record (likely suspect)
    if (user !== null && user._id !== parseInt(authorizationid)) {
      throw new Error('Credentials are mismatched');
    }

    // The user is new so we can create them
    if (user === null) {
      User.create(
        { _id: authorizationid, email: authorizationemail },
        (err, user) => {
          if (err) throw new Error('Failed to create new account');

          req.user_id = user._id;
        },
      );
    }
  } catch (err) {
    // Pass the error to be handled by the middleware
    throw new Error(err);
  }
}

async function auth(req, res, next) {
  await validate(req);
  next();
}

module.exports = auth;
