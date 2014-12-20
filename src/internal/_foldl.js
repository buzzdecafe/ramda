var _arrayReduce = require('./_arrayReduce');
var _isArray = require('./_isArray');
var _isIterable = require('./_isIterable');
var _isTransformer = require('./_isTransformer');
var _iterableReduce = require('./_iterableReduce');
var _xwrap = require('./_xwrap');

module.exports = function _foldl(fn, acc, list) {
    var xf = (_isTransformer(fn)) ? fn : _xwrap(fn);
    if (_isArray(list)) {
        return _arrayReduce(xf, acc, list);
    } else if (_isIterable(list)) {
        return _iterableReduce(xf, acc, list);
    } else {
        throw new TypeError(typeof list + ' is not reducible');
    }
};
