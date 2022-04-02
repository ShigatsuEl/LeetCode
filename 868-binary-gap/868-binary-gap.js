/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    n = n.toString(2);
    let count = 0, pos = 0;
    
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '1') {
            count = Math.max(i - pos, count);
            pos = i;
        }
    }
    
    return count;
};