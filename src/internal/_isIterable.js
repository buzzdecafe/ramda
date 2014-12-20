module.exports = function _isIterable(x) {
    return x['@@iterator'] || (x.next && typeof x.next === 'function');
};
