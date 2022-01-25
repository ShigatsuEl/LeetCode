/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let first = s[0], res1 = 0, res2 = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 1 && s[i] === '1') res1++;
        if (i % 2 === 0 && s[i] === '0') res1++;
        if (i % 2 === 1 && s[i] === '0') res2++;
        if (i % 2 === 0 && s[i] === '1') res2++;
    }
    
    return Math.min(res1, res2);
};