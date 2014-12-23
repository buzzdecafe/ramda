var _map = require('./internal/_map');
var _slice = require('./internal/_slice');
var _xfConvert = require('./internal/_xfConvert');
var pipe = require('./pipe');

module.exports = function tPipe() {
    var funcs = _map(_xfConvert, _slice(arguments));
    return pipe.apply(this, funcs);
};
