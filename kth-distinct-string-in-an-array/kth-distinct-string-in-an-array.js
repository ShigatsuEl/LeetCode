/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let obj = {}, distinctArr = [];
    
    for (let x of arr) {
        if (obj[x]) obj[x] += 1;
        else obj[x] = 1;
    }
    
    for (let x in obj) {
        if (obj[x] === 1) distinctArr.push(x);
    }
    
    return distinctArr[k - 1] ?? "";
};