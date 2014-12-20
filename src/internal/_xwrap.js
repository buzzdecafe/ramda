var identity = require('./identity');

module.exports = (function() {
    function _xwrap(fn) {
        return new XWrap(fn);
    }

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

    return _xwrap;
}());
