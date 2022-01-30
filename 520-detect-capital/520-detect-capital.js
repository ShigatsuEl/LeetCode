/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    word = word.split('');
    
    let code = word[0].charCodeAt(0);
    
    if (code >= 65 && code <= 90) {
        if (word.every((str) => (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90))) return true;
        let flag = true;
        for (let i = 1; i < word.length; i++) {
            if (word[i].charCodeAt(0) < 97 || word[i].charCodeAt(0) > 122) flag = false;
        }
        if (flag) return true;
    } else {
        if (word.every((str) => (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122))) return true; 
    }
    
    return false;
};