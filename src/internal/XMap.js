function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
}

XMap.prototype.init = function() {
    return this.xf.init();
};
XMap.prototype.result = function(result) {
    return this.xf.result(result);
};
XMap.prototype.step = function(result, input) {
    return this.xf.step(result, this.f(input));
};

module.exports = XMap;
