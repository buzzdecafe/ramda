var _curry2 = require('./_curry2');
var _reduced = require('_reduced');

module.exports = (function() {
    function _xtake(n, xf) {
        return new XTake(n, xf);
    }

    function XTake(n, xf) {
        this.xf = xf;
        this.n = n;
    }

    XTake.prototype.init = function() {
        return this.xf.init();
    };

    XTake.prototype.result = function(result) {
        return this.xf.result(result);
    };

    XTake.prototype.step = function(result, input) {
      if (this.n-- > 0) {
        result = this.xf.step(result, input);
      }
      if (this.n <= 0) {
        result = _reduced(result);
      }
      return result;
    };

    return _curry2(_xtake);
})();
