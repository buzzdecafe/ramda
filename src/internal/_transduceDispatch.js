var _appendXf = require('./_appendXf');
var _curry2 = require('./_curry2');
var transduce = require('../transduce');

module.exports = _curry2(function _transduceDispatch(xf, obj){
    var appendXf = _appendXf(obj);
    return transduce(xf, appendXf, appendXf.init(), obj);
});
