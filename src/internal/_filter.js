var _transduceDispatch = require('./_transduceDispatch');
var _xfilter = require('./_xfilter');

module.exports = function _filter(fn, list) {
  return _transduceDispatch(_xfilter(fn), list);
};
