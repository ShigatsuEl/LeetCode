/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let result = [];
    
    for (let x of s) {
        let num = parseInt(x);
        if (!isNaN(num) && !result.includes(num)) {
            result.push(num);
        }
    }
    
    result.sort((a, b) => b - a);
    
    return result.length > 1 ? result[1] : -1;
};