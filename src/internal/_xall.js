var _curry2 = require('./_curry2');
var _reduced = require('_reduced');

module.exports = (function() {
    function _xall(f, xf) {
        return new XAll(f, xf);
    }

    function XAll(f, xf) {
        this.xf = xf;
        this.f = f;
    }

    XAll.prototype.init = function() {
        return this.xf.init();
    };

    XAll.prototype.result = function(result) {
        return this.xf.result(!!result);
    };

    XAll.prototype.step = function(result, input) {
        return this.f(input) ? result : _reduced(this.xf.step(result, false));
    };

    return _curry2(_xall);
})();
