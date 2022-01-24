/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    if (words.length === 1) return true;
    
    let obj = {};
    
    for (let i = 0; i < words.length; i++) {
        words[i].split('').forEach((str) => obj[str] = (obj[str] || 0) + 1);
    }
    
    return Object.values(obj).every((value) => value % words.length === 0);
};