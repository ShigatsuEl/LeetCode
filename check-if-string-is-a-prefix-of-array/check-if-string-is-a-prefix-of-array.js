/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let tmp = '';
    
    for (const word of words) {
        tmp += word;
        if (tmp == s) return true; 
    }
    
    return false;
};