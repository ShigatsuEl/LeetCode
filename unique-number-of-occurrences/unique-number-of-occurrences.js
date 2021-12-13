/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}, result = [];
    
    for (let x of arr) {
        if (obj[x]) {
            obj[x] += 1;
        } else {
            obj[x] = 1;
        }
    }
    
    for (let x in obj) {
        result.push(obj[x]);
    }
    
    for (let x of result) {
        if (result.indexOf(x) !== result.lastIndexOf(x)) return false;
    }
    
    return true;
};