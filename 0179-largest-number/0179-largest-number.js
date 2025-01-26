/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const compare = (a, b) => {
        const order1 = a + b;
        const order2 = b + a;
        return order2.localeCompare(order1); // Sort in descending order based on concatenation
    };

    // Convert numbers to strings
    const strNums = nums.map(String);
    // Sort using the custom comparator
    strNums.sort(compare);
    // Join the sorted strings
    const result = strNums.join('');
    // Handle the edge case where the result is all zeros
    return result[0] === '0' ? '0' : result;

};