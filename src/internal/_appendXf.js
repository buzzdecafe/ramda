var _add = require('./_add');
var _appendTo = require('./_appendTo');
var _isTransformer = require('./_isTransformer');
var _symTransformer = require('./_symTransformer');
var identity = require('../identity');
var isArrayLike = require('../isArrayLike');
var mixin = require('../mixin');

module.exports = (function() {
  var _appendXfArray = {
       init: function() {
           return [];
       },
       step: _appendTo,
       result: identity
  };
  var _appendXfString = {
      init: function() {
          return '';
      },
      step: _add,
      result: identity
  };
  var _appendXfObject = {
      init: function() {
          return {};
      },
      step: mixin,
      result: identity
  };


  function _appendXf(obj) {
      if (_isTransformer(obj)) {
          var xf = obj[_symTransformer] || obj;
          return xf;
      }
      if (isArrayLike(obj)) {
          return _appendXfArray;
      }
      if (typeof obj === 'string') {
          return _appendXfString;
      }
      if (typeof obj === 'object') {
          return _appendXfObject;
      }
      throw new Error('Cannot create transformer for ' + obj);
  }

  return _appendXf;
})();
