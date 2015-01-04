var always = require('../always');
var identity = require('../identity');
var nthArg = require('../nthArg');

// wrap in always because _transduceDispatch calls function
// with obj which we ignore here
module.exports = always({
  init: always(),
  step: nthArg(1),
  result: identity
});
