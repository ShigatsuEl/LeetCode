/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (t.indexOf(s[i]) !== -1) t = t.replace(s[i], '');
    }
    
    return t;
};