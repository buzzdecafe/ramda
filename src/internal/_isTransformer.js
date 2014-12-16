var symbolXform = require('./_symbolXform');

var _isTransformer = (typeof Symbol === 'undefined') ? 
    function(obj) { 
        return obj != null && typeof obj.step === 'function' && typeof obj.result === 'function';
    } :
    function(obj) { 
        return obj != null && obj[symbolXform] != null;
    };

module.exports = _isTransformer;
