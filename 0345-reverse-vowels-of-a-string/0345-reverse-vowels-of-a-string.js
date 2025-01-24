/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     const vowels = "aeiouAEIOU";
    // Convert string to array for easier manipulation
    const chars = s.split("");
    let left = 0;
    let right = s.length - 1;

    // Two-pointer approach
    while (left < right) {
        // Move left pointer forward if it's not a vowel
        while (left < right && !vowels.includes(chars[left])) {
            left++;
        }

        // Move right pointer backward if it's not a vowel
        while (left < right && !vowels.includes(chars[right])) {
            right--;
        }

        // Swap the vowels
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }

    // Convert array back to string and return
    return chars.join("");
};