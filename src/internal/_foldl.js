var _arrayReduce = require('./_arrayReduce');
var _isIterable = require('./_isIterable');
var _iterableReduce = require('./_iterableReduce');
var isArrayLike = require('../isArrayLike');

module.exports = function _foldl(fn, acc, list) {
    if (isArrayLike(list)) {
        return _arrayReduce(fn, acc, list);
    } else if (_isIterable(list)) {
        return _iterableReduce(fn, acc, list);
    } else {
        // TODO: better message here please
        throw new TypeError(typeof list + ' is not reducible');
    }
};
