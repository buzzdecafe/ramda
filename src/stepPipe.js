var _transduceDispatch = require('./internal/_transduceDispatch');
var tCompose = require('./tCompose');

module.exports = function stepCompose(){
    // Use tCompose to reverse transducer composition so API matches a normal compose
    return _transduceDispatch(tCompose.apply(this, arguments));
};
