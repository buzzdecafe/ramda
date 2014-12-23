var _XF_FLAG_ = require('./_XF_FLAG_');
var _isArray = require('./_isArray');
var _slice = require('./_slice');
var _transduceDispatch = require('./_transduceDispatch');

module.exports = function _dispatchable(name, xf, f) {
    return function() {
        var length = arguments.length;
        var obj = arguments[length - 1];
        var args = _slice(arguments, 0, length - 1);

        if (obj === _XF_FLAG_) {
            return xf.apply(null, args);
        }

        if (obj && !_isArray(obj) && typeof obj[name] === 'function') {
            return obj[name].apply(obj, args);
        }

        if (typeof f === 'function') {
            return f.apply(null, arguments);
        }

        return _transduceDispatch(xf.apply(null, args), obj);
    };
};
