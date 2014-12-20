var _appendXf = require('./_appendXf');
var _xmap = require('./_xmap');
var foldl = require('../foldl');

module.exports = function _map(fn, list) {
    return foldl(_xmap(fn, _appendXf()), [], list);
};

