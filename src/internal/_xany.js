var _curry2 = require('./_curry2');
var _reduced = require('_reduced');

module.exports = (function() {
    function _xany(f, xf) {
        return new XAny(f, xf);
    }

    function XAny(f, xf) {
        this.xf = xf;
        this.f = f;
    }

    XAny.prototype.init = function() {
        return this.xf.init();
    };

    XAny.prototype.result = function(result) {
        return this.xf.result(!!result);
    };

    XAny.prototype.step = function(result, input) {
        return this.f(input) ? _reduced(this.xf.step(result, true)) : result;
    };

    return _curry2(_xany);
})();
