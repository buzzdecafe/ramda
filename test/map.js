var assert = require('assert');

var R = require('..');


describe('map', function() {
    var times2 = function(x) {return x * 2;};
    var add1 = function(x) {return x + 1;};
    var dec = function(x) { return x - 1; };
    var listxf = {
        init: function() { return []; },
        step: function(acc, x) { return acc.concat([x]); },
        result: function(x) { return x; }
    };

    it('maps simple functions over arrays', function() {
        assert.deepEqual(R.map(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
    });

    it('dispatches to objects that implement `map`', function() {
        var obj = {x: 100, map: function(f) { return f(this.x); }};
        assert.strictEqual(R.map(add1, obj), 101);
    });

    it('dispatches to transformer objects', function() {
        assert.deepEqual(R.map(add1, listxf), {
            f: add1,
            xf: listxf
        });
    });

    it('composes', function() {
        var mdouble = R.map(times2);
        var mdec = R.map(dec);
        assert.deepEqual(mdec(mdouble([10, 20, 30])), [19, 39, 59]);
    });

    it('can compose transducer-style', function() {
        var mdouble = R.map(times2);
        var mdec = R.map(dec);
        var xcomp = mdec(mdouble(listxf));
        assert.deepEqual(xcomp.xf, {xf: listxf, f: times2});
        assert.strictEqual(xcomp.f, dec);
    });

    it('is automatically curried', function() {
        var inc = R.map(add1);
        assert.deepEqual(inc([1, 2, 3]), [2, 3, 4]);
    });

    it('correctly reports the arity of curried versions', function() {
        var inc = R.map(add1);
        assert.strictEqual(inc.length, 1);
    });

});
