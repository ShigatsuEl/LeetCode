/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let s = {};
    for (let i =1; i< nums.length+1; i++) {
        s[i] = 1;
    }
    
    nums.forEach(n=> {
        delete s[n];
    })
    
   return Object.keys(s)
};