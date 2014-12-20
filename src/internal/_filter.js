var _appendXf = require('./_appendXf');
var _xfilter = require('./_xfilter');
var foldl = require('../foldl');

module.exports = function _filter(fn, list) {
    return foldl(_xfilter(fn, _appendXf()), [], list);
};
