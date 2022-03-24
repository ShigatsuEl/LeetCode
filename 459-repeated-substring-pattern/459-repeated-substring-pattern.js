/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i < s.length; i++) {
        let subString = s.substring(0, i);
        
        if (s.split(subString).every((v) => v === '')) return true;
    }
    
    return false;
};