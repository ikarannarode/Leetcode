/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let len1 = num1.length, len2 = num2.length;
    let result = new Array(len1 + len2).fill(0);

    // Multiply each digit from num1 with each digit from num2
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0'); // Convert char to number
            let sum = mul + result[i + j + 1]; // Add existing value at position
            
            result[i + j + 1] = sum % 10; // Store single digit
            result[i + j] += Math.floor(sum / 10); // Carry forward
        }
    }

    // Convert result array to string
    let product = result.join('').replace(/^0+/, ''); // Remove leading zeros

    return product.length > 0 ? product : "0"; // Handle edge case where result is zero
}
