/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj = {};
    
    for (let x of s) {
        if (!obj[x]) {
            obj[x] = 1;
        } else {
            obj[x] += 1;
        }
    }
    
    let values = Object.values(obj);
    
    return values.every((value) => value === values[0])
};