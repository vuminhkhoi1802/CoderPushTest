require("dotenv").config();
module.exports = {
  username: process.env.USERNAME || "khoivu1802",
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: "mysql",
};
