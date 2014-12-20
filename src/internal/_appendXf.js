module.exports = function _appendXf() {
    return {
        step: function appendTo(acc, x) {
            return acc.concat(x);
        },
        result: function I(x) { return x; }
    };
};
