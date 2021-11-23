const mongoose = require('mongoose');

const { DB_URL, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
// DB_URL=isit422.vyteg.mongodb.net
// DB_NAME=mindfulEating
// DB_USER=db_user
// DB_PASSWORD=reckless-wildwood-WINGTIP-stagger-trickle-coach-sensate

// `mongodb+srv://db_user:reckless-wildwood-WINGTIP-stagger-trickle-coach-sensate@isit422.vyteg.mongodb.net/mindfulEating?retryWrites=true&w=majority
// mongodb+srv://db_user:reckless-wildwood-WINGTIP-stagger-trickle-coach-sensate@isit422.vyteg.mongodb.net/mindfulEating

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`, 
    // {useFindAndModify: false}
  )
  .then(
    () => {
      console.log('Database connection established!');
    },
    err => {
      console.log('Error connecting Database instance due to: ', err);
    },
  );
