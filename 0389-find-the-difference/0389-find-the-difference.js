/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const count={}
    for(let char of s){
        count[char]=(count[char]||0)+1
    }
   for(let char of t){
       if(!count[char]){
        return char;
       }
       else{
        count[char]--;
       }
   }

};