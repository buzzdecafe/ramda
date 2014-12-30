var _curry2 = require('./_curry2');
var _foldl = require('./_foldl');
var _isTransformer = require('./_isTransformer');

module.exports = _curry2(function _transduceDispatch(xf, appender) {
    return function _xfDispatch() {
        var obj = this;
        var transducer = xf.apply(null, arguments);
        if (_isTransformer(obj)) {
            return transducer(obj);
        }
        var stepper = appender(obj);
        return _foldl(transducer(stepper), stepper.init(), obj);
    };
});
