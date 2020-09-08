"use strict";

require("dotenv").config();

module.exports = {
  development: {
    database: "books",
    username: "postgres",
    password: "postgres",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    database: "book_test",
    username: "postgres",
    password: "postgres",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "books",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
//# sourceMappingURL=config.js.map