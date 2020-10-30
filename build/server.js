"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _testController = require("./src/controllers/testController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Controller's import
// Server config
require('dotenv').config();

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json()); //Routes

app.get('/api', function (req, res) {
  return res.status(200).send('massage - Good Job');
});
app.post('/api/test', _testController.TestController.create); //Start server

app.listen(process.env.SERVER_PORT);
console.log('app ready on port: ' + process.env.SERVER_PORT);