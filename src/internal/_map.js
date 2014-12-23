var _transduceDispatch = require('./_transduceDispatch');
var _xmap = require('./_xmap');

module.exports = function _map(fn, list) {
    return _transduceDispatch(_xmap(fn), list);
};

