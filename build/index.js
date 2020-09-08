"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _BookRoutes = _interopRequireDefault(require("./server/routes/BookRoutes"));

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_express["default"].json());
var port = process.env.PORT || 8000; // books routes

app.use("/api/v1/books", _BookRoutes["default"]); // when a random route is inputed

app.get("*", function (req, res) {
  return res.status(200).send({
    message: "Welcome to this api!"
  });
});
app.listen(port, function () {
  return console.log("App is listening to port: ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map