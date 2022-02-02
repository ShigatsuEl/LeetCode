/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let idx = -1;
    
    for (let i = 0; i < s.length; i++) {
        let temp = t.indexOf(s[i], idx + 1);
        if (temp > idx) idx = temp;
        else return false;
    }
    
    return true;
};