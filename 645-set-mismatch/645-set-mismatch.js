/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let len = nums.length;
    let sum = (len * (len + 1)) / 2;
    let s = 0, act = 0;
    let obj = {};
    for(let i of nums){
        if(obj[i]){
            act = i;
        }
        else{
            obj[i] = true;
            s+=i;
        }
    }
    return [act, sum - s];
    
};