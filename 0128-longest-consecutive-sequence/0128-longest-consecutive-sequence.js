/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    // Sort and remove duplicates
    let newarr = [...new Set(nums.sort((a, b) => a - b))];

    let maxCount = 1;
    let count = 1;

    for (let i = 1; i < newarr.length; i++) {
        if (newarr[i] === newarr[i - 1] + 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 1;
        }
    }

    return maxCount;
};
