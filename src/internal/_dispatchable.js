var _isArray = require('./_isArray');
var _isTransformer = require('./_isTransformer');

module.exports = function _dispatchable(name, fn, X) {
    return function(a, b, c) {
        var length = arguments.length;
        var obj = arguments[length - 1];

        if (_isTransformer(obj)) {
            return new X(arguments[0], obj);
        }
        var callBound = obj && !_isArray(obj) && typeof obj[name] === 'function';
        switch (arguments.length) {
            case 0: return fn();
            case 1: return callBound ? obj[name]() : fn(a);
            case 2: return callBound ? obj[name](a) : fn(a, b);
            case 3: return callBound ? obj[name](a, b) : fn(a, b, c);
        }
    };
};
