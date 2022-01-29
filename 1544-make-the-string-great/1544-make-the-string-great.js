/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if (s.length === 1) return s;
    
    s = s.split('');
    
    let idx = 0;
    
    while (idx < s.length - 1) {
        if (Math.abs(s[idx].charCodeAt(0) - s[idx + 1].charCodeAt(0)) === 32) {
            s.splice(idx, 2);
            idx = 0;
            continue;
        }
        idx++;
    }
    
    return s.join('');
};