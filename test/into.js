var assert = require('assert');

var R = require('..');


describe('into', function() {
    var add = R.curry(function(a, b) {return a + b;});
    var isOdd = function(b) {return b % 2 === 1;};
    var addXf = {
        step: add,
        init: R.always(0),
        result: R.I
    };

    it('transduces into arrays', function() {
        assert.deepEqual(R.into([], R.map(add(1)), [1, 2, 3, 4]), [2, 3, 4, 5]);
        assert.deepEqual(R.into([], R.filter(isOdd), [1, 2, 3, 4]), [1, 3]);
        assert.deepEqual(R.into([], R.compose(R.map(add(1)), R.take(2)), [1, 2, 3, 4]), [2, 3]);
    });

    it('transduces into strings', function() {
        assert.deepEqual(R.into('', R.map(add(1)), [1, 2, 3, 4]), '2345');
        assert.deepEqual(R.into('', R.filter(isOdd), [1, 2, 3, 4]), '13');
        assert.deepEqual(R.into('', R.compose(R.map(add(1)), R.take(2)), [1, 2, 3, 4]), '23');
    });

    it('is automatically curried', function() {
        var intoArray = R.into([]);
        var add2 = R.map(add(2));
        var result = intoArray(add2);
        assert.deepEqual(result([1, 2, 3, 4]), [3, 4, 5, 6]);
    });

    it('allows custom transformer', function() {
        var intoSum = R.into(addXf);
        var add2 = R.map(add(2));
        var result = intoSum(add2);
        assert.deepEqual(result([1, 2, 3, 4]), 18);
    });

    it('correctly reports the arity of curried versions', function() {
        var sum = R.into([], R.map(add));
        assert.strictEqual(sum.length, 1);
    });

    it('throws on zero arguments', function() {
        assert.throws(R.into, TypeError);
        assert.throws(R.into([]), TypeError);
    });
});
