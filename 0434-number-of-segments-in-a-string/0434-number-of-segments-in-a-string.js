/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.trim().split(/\s+/).filter(Boolean).length
};