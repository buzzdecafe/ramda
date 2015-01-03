var _appendXf = require('./internal/_appendXf');
var _curry3 = require('./internal/_curry3');
var _foldl = require('./internal/_foldl');
var _isTransformer = require('./internal/_isTransformer');

module.exports = _curry3(function into(to, xf, ls) {
    var acc, fn;
    if (_isTransformer(to)) {
        fn = to;
        acc = to.init();
    } else {
        fn = _appendXf(to);
        acc = to;
    }
    return _foldl(xf(fn), acc, ls);
});
