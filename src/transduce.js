var _curry4 = require('./internal/_curry4');
var _foldl = require('./internal/_foldl');

module.exports = _curry4(function(xf, fn, acc, ls) {
    return _foldl(xf(fn), acc, ls);
});
