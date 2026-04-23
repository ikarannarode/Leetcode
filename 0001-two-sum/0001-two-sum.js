/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++){
        let val = find(nums, target - nums[i], i);
        if(val !== -1){
            return [i, val];
        }
    }
    return []
};


function find(nums, num, currentIndex){
   for(let i = 0; i < nums.length; i++){
      if(nums[i] === num && i !== currentIndex){
        return i;
      }
   }
   return -1;
}