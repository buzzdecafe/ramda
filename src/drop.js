var _appendXf = require('./internal/_appendXf');
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _transduceDispatch = require('./internal/_transduceDispatch');
var _xdrop = require('./internal/_xdrop');


/**
 * Returns a new list containing all but the first `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig Number -> [a] -> [a]
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The array to consider.
 * @return {Array} The last `n` elements of `list`.
 * @example
 *
 *     R.drop(3, [1,2,3,4,5,6,7]); //=> [4,5,6,7]
 */
module.exports = _curry2(_dispatchable('drop', _transduceDispatch(_xdrop, _appendXf)));
