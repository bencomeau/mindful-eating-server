const mongoose = require('mongoose');

const { DB_URL, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`,
  )
  .then(
    () => {
      console.log('Database connection established!');
    },
    err => {
      console.log('Error connecting Database instance due to: ', err);
    },
  );
