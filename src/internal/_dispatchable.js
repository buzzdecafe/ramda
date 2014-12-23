var _isArray = require('./_isArray');
var _slice = require('./_slice');
var _transduceDispatch = require('./_transduceDispatch');
var _XF_FLAG_ = require('./_XF_FLAG_');

module.exports = function _dispatchable(name, xf) {
    return function() {
        var length = arguments.length;
        var obj = arguments[length - 1];
        var args;

        if (obj === _XF_FLAG_) {
            return xf.apply(this, _slice(arguments, 0, length - 2));
        }

        if (obj && !_isArray(obj) && typeof obj[name] === 'function') {
            return obj[name].apply(obj, args);
        }

        return _transduceDispatch(xf.apply(null, args), obj);
    };
};
