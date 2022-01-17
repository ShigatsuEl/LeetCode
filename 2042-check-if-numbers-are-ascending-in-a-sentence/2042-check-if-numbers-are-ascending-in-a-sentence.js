/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    s = s.split(' ').filter((v) => !isNaN(parseInt(v))).map((v) => parseInt(v));
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] <= s[i - 1]) return false;
    }
    
    return true;
};