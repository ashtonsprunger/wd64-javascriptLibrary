const { response } = require("express");

const TestController = require('./TestController');

module.exports = {
    test: TestController,
};