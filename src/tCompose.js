var _map = require('./internal/_map');
var _slice = require('./internal/_slice');
var _xfConvert = require('./internal/_xfConvert');
var compose = require('./compose');

module.exports = function tCompose() {
    var funcs = _map(_xfConvert, _slice(arguments));
    return compose.apply(this, funcs);
};
