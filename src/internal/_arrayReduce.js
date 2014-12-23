module.exports = function _arrayReduce(xf, acc, ls) {
    var idx = -1, len = ls.length;
    while (++idx < len) {
        acc = xf.step(acc, ls[idx]);
        if (acc.__transducers_reduced__) {
            acc = acc.value;
            break;
        }
    }
    return xf.result(acc);
};
