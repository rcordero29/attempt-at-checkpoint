let mysql = require('mysql');

require('dotenv').config();

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// connection.query('select now()', [], function (error, results) {
//   if (error) {
//     console.log('could not connect to the database'.error);
//   } else {
//     console.log('connection made, result ='.results);
//   }
// });

module.exports = connection;
