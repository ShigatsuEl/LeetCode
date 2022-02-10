/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    s = s.split(' ');
    
    if (pattern.length !== s.length) return false;
    
    let obj = {};
    
    for (let i = 0; i < pattern.length; i++) {
        if (!obj[pattern[i]]) {
            obj[pattern[i]] = s[i];
            continue;
        } else {
            if (obj[pattern[i]] !== s[i]) return false;
        }
    }
    
    let arr = Object.values(obj);
    
    return arr.length === new Set(arr).size ? true : false;
};