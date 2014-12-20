module.exports = function _arrayReduce(xf, acc, ls) {
    var i = -1, len = ls.length;
    while (++i < len) {
        acc = xf.step(acc, ls[i]);
        if (acc.__transducers_reduced__) {
            acc = acc.value;
            break;
        }
    }
    return xf.result(acc);
};
