/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let result = 0;
    
    for (let i = 0; i < s.length - 2; i++) {
        let set = new Set();
        let x = s.substring(i, i + 3).split('').forEach((v) => set.add(v));
        if (set.size === 3) result++;
    }
    
    return result;
};