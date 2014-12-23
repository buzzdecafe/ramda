var _curry2 = require('./_curry2');

module.exports = (function() {
    function _xdrop(n, xf) {
        return new XDrop(n, xf);
    }

    function XDrop(n, xf) {
        this.xf = xf;
        this.n = n;
    }

    XDrop.prototype.init = function() {
        return this.xf.init();
    };

    XDrop.prototype.result = function(result) {
        return this.xf.result(result);
    };

    XDrop.prototype.step = function(result, input) {
      if (this.n > 0) {
          this.n--;
          return result;
      }
      return this.xf.step(result, input);
    };

    return _curry2(_xdrop);
})();
