var _arrayReduce = require('./_arrayReduce');
var _isArray = require('./_isArray');
var _iterableReduce = require('./iterableReduce');
var _isIterable = require('./isIterable');

module.exports = function _foldl(fn, acc, list) {
    if (_isArray(list)) {
        return _arrayReduce(fn, acc, list);
    } else if (_isIterable(list)) {
        return _iterableReduce(fn, acc, list);
    } else {
        throw new TypeError(typeof list + ' is not reducible');
    }
};
