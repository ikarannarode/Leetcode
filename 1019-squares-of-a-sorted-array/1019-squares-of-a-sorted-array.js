/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
     let newarr = nums.map((n) => (n * n)).sort((a, b) => a - b)
    return newarr

};