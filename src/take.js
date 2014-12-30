var _appendXf = require('./internal/_appendXf');
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _transduceDispatch = require('./internal/_transduceDispatch');
var _xtake = require('./internal/_xtake');


/**
 * Returns a new list containing the first `n` elements of the given list.  If
 * `n > * list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig Number -> [a] -> [a]
 * @param {Number} n The number of elements to return.
 * @param {Array} list The array to query.
 * @return {Array} A new array containing the first elements of `list`.
 */
module.exports = _curry2(_dispatchable('take', _transduceDispatch(_xtake, _appendXf)));
