// jshint esversion:6

// Set up MySQL connection.
const mysql = require('mysql');
const util = require('util');
const dotenv = require("dotenv");
dotenv.config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    PORT: 5050

});
console.log(connection + 'connection is');

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
connection.query = util.promisify(connection.query);

module.exports = connection;