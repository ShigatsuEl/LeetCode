/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let result = 0, obj1 = {}, obj2 = {};
    
    function countingNum(arr, obj) {
        for (let i = 0; i < arr.length; i++) {
            if (obj[arr[i]]) obj[arr[i]] += 1;
            else obj[arr[i]] = 1;
        }
    }
    
    countingNum(words1, obj1);
    countingNum(words2, obj2);
    
    for (let x in obj1) {
        if (obj1[x] === 1 && obj2[x] === 1) result++;
    }
    
    return result;
};