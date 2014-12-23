var _curry2 = require('./_curry2');
var _reduced = require('_reduced');

module.exports = (function() {
    function _xtakeWhile(f, xf) {
        return new XTakeWhile(f, xf);
    }

    function XTakeWhile(f, xf) {
        this.xf = xf;
        this.f = f;
    }

    XTakeWhile.prototype.init = function() {
        return this.xf.init();
    };

    XTakeWhile.prototype.result = function(result) {
        return this.xf.result(result);
    };

    XTakeWhile.prototype.step = function(result, input) {
        if (this.f(input)) {
            result = this.xf.step(result, input);
        } else {
            result = _reduced(result);
        }
        return result;
    };

    return _curry2(_xtakeWhile);
})();
