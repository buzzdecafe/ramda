var _appendXf = require('./internal/_appendXf');
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _transduceDispatch = require('./internal/_transduceDispatch');
var _xdropWhile = require('./internal/_xdropWhile');

/**
 * Returns a new list containing the last `n` elements of a given list, passing each value
 * to the supplied predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is passed one argument: *(value)*.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @example
 *
 *      var lteTwo = function(x) {
 *        return x <= 2;
 *      };
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4]); //=> [3, 4]
 */
module.exports = _curry2(_dispatchable('dropWhile', _transduceDispatch(_xdropWhile, _appendXf)));
