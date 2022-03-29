/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    n = n.toString(2);
    
    let first = n[0];
    
    for (let i = 0; i < n.length; i++) {
        if (first === '1') {
            if (i % 2 === 0 && n[i] === '0') return false;
            if (i % 2 === 1 && n[i] === '1') return false;
        } else {
            if (i % 2 === 0 && n[i] === '1') return false;
            if (i % 2 === 1 && n[i] === '0') return false;
        }
    }
    
    return true;
};