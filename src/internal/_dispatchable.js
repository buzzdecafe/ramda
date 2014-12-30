var _isArray = require('./_isArray');
var _slice = require('./_slice');

module.exports = function _dispatchable(name, fn) {
    return function() {
        var length = arguments.length - 1;
        var obj = arguments[length];
        var args = _slice(arguments, 0, length);

        return (obj && !_isArray(obj) && typeof obj[name] === 'function') ?
            obj[name].apply(obj, args) :
            fn.apply(obj, args);
    };
};
