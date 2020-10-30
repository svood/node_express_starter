"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestController = void 0;

var _testModel = require("../models/testModel");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TestController = /*#__PURE__*/function () {
  function TestController() {
    _classCallCheck(this, TestController);
  }

  _createClass(TestController, null, [{
    key: "create",
    value: function create(req, res) {
      var model = new _testModel.TestModel();
      var data = req.body.data;
      if (!data) return res.status(400).send({
        'massage': 'Where is my data ?'
      });
      if (data !== _typeof("")) return res.status(400).send({
        'massage': 'mast be a string !'
      });
      return res.status(200).send({
        'massage': model.create(data)
      });
    }
  }]);

  return TestController;
}();

exports.TestController = TestController;