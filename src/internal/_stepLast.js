var always = require('../always');
var identity = require('../identity');
var nthArg = require('../nthArg');

module.exports = (function() {
    function LastValue(initFn) {
        this.init = initFn;
    }
    LastValue.prototype.step = nthArg(1);
    LastValue.prototype.result = identity;

    return function _stepLast(initFn) {
        // wrap in always because dispatch below calls function with
        // obj to match _appendXf(obj)
        return always(new LastValue(initFn));
    };
}());
