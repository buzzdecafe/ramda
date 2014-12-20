module.exports = function _iterableReduce(xf, acc, iter) {
    if (iter['@@iterator']) {
        iter = iter['@@iterator']();
    }
    var step = iter.next();
    while (!step.done) {
        acc = xf.step(acc, step.value);
        if (acc.__transducers_reduced__) {
            acc = acc.value;
            break;
        }
        step = iter.next();
    }
    return xf.result(acc);
};
