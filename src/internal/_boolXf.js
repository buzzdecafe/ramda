var _boolOr = require('./_boolOr');
var identity = require('../identity');

module.exports = function _boolXf() {
    return {
        step: _boolOr,
        result: identity
    };
};
