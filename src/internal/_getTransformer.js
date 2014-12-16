module.exports = function _getTransformer(obj) {
    // precondition: _isTransformer
    return obj[symTransformer] || obj;
};
