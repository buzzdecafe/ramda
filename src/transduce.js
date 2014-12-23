var _curry4 = require('./internal/_curry4');
var foldl = require('./foldl');

module.exports = _curry4(function(xf, fn, acc, ls) {
    return foldl(xf(fn), acc, ls);
});
