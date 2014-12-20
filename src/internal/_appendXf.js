var _appendTo = require('../_appendTo');
var identity = require('../identity');

module.exports = function _appendXf() {
    return {
        step: _appendTo,
        result: identity
    };
};
