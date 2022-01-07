/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let sum = 0, result = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            sum++;
        } else {
            sum--;
        }
        if (sum === 0) result++;
    }
    
    return result;
};