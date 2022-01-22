/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let result = 1, count = 1;
    
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) count++;
        else count = 1;
        result = Math.max(result, count);
    }
    
    return result;
};