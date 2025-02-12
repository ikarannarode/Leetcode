/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function(n) {
    let current = n - 1; // Start 1 less since we increment before returning

    return function() {
        return ++current; // Increment first, then return the value
    };
};