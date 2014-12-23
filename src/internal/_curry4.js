var _curry2 = require('./_curry2');
var _curry3 = require('./_curry3');
var _noArgsException = require('./_noArgsException');


/**
 * Optimized internal four-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 * @example
 *
 *      var addThree = function(a, b, c) {
 *        return a + b + c;
 *      };
 *
 *      var curriedAddThree = _curry3(addThree);
 */
module.exports = function _curry4(fn) {
    return function(a, b, c, d) {
        switch (arguments.length) {
            case 0:
                throw _noArgsException();
            case 1:
                return _curry3(function(b, c, d) {
                    return fn(a, b, c, d);
                });
            case 2:
                return _curry2(function(c, d) {
                    return fn(a, b, c, d);
                });
            case 3:
                return function(d) {
                    return fn(a, b, c, d);
                };
            default:
                return fn(a, b, c, d);
        }
    };
};
