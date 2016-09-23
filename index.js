var os = require('os')
var path = require('path')
var fs = require('fs')
var builder = require('xmlbuilder')
var pathIsAbsolute = require('path-is-absolute')

// concatenate test suite(s) and test description by default
function defaultNameFormatter (browser, result) {
  return result.suite.join(' ') + ' ' + result.description
}

var VimReporter = function (baseReporterDecorator, config, logger, helper, formatError) {

  this.specFailure = function(browser, result) {
    this.write(result);
  };
}

module.exports = {
  'reporter:vim': ['type', VimReporter] 
};
