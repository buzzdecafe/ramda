var _appendXf = require('./_appendXf');
var _xmap = require('./_xfilter');
var foldl = require('../foldl');

module.exports = function _filter(fn, list) {
    return foldl(_xmap(fn, _appendXf()), [], list);
};

