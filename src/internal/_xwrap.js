var identity = require('./identity');

module.exports = (function _xwrap(fn) {
    function XWrap(fn) {
        this.f = fn;
    }
    XWrap.prototype.init = function() {
        throw new Error('init not implemented on XWrap');
    };
    XWrap.prototype.result = identity;
    XWrap.prototype.step = function(acc, x) {
        return this.f(acc, x);
    };

    return new XWrap(fn);
}());
