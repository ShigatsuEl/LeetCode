/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}, char = '';
    
    for (let x of s) {
        obj[x] = (obj[x] || 0) + 1;
    }
    
    for (let [key, value] of Object.entries(obj)) {
        if (value === 1) {
            char = key;
            break;
        }
    }
    
    return char !== '' ? s.indexOf(char) : -1;
};