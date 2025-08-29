/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let maxWater=0;
    while(left<right){
        let w=right-left;
        let ht=Math.min(height[left],height[right])
        let currentWater=w*ht
        maxWater=Math.max(currentWater,maxWater)

        height[left]<height[right]?left++:right--;
    }
    return maxWater;
};