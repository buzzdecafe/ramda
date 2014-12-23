var _transduceDispatch = require('./internal/_transduceDispatch');
var tPipe = require('./tPipe');

module.exports = function() {
    // Use tPipe to reverse transducer composition so API matches a normal compose
    return _transduceDispatch(tPipe.apply(this, arguments));
};
