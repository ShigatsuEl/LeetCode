/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let count = 2, obj = {};
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count--;
            obj[s1[i]] = (obj[s1[i]] || 0) + 1;
            obj[s2[i]] = (obj[s2[i]] || 0) - 1;
        }
    }
        
    return (count === 2 || count === 0) && Object.values(obj).every((v) => v === 0) ? true : false;
};