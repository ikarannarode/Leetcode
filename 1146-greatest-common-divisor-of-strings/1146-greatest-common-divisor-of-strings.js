/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
     if (str1 + str2 !== str2 + str1) return ""; // If they cannot form a valid repeated pattern
    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b); // Euclidean algorithm
    return str1.substring(0, gcd(str1.length, str2.length));
};