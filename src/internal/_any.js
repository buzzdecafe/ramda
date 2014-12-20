var _boolXf = require('./_boolXf');
var _xany = require('./_xany');
var foldl = require('../foldl');

module.exports = function _any(fn, list) {
    return foldl(_xany(fn, _boolXf()), false, list);
};
