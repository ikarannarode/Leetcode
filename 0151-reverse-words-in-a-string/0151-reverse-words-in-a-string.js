/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let str=s.split(" ").reverse().filter(i=>i!=="").join(" ")
return str;
};