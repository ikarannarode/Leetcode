/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let newstr = "";
    let i = 0, j = 0;

    // Merge the characters alternately
    while (i < word1.length && j < word2.length) {
        newstr += word1[i++];
        newstr += word2[j++];
    }

    // Append the remaining characters from the longer word
    if (i < word1.length) {
        newstr += word1.slice(i);
    }
    if (j < word2.length) {
        newstr += word2.slice(j);
    }

    return newstr;
};

console.log(mergeAlternately("Hello", "Worldew"));