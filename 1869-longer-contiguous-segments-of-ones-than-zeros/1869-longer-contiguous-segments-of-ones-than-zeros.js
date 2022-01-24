/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    if (s.length === 1) {
        if (s[0] === '1') return true;
        else return false;
    }
    
    let one = 1, zero = 1, result = [1, 1];
    
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1] && s[i] === '1') one++;
        if (s[i] === s[i + 1] && s[i] === '0') zero++;
        if (s[i] !== s[i + 1]) {
            result[0] = Math.max(result[0], one);
            result[1] = Math.max(result[1], zero);
            one = 1;
            zero = 1;
        }
    }
    
    result[0] = Math.max(result[0], one);
    result[1] = Math.max(result[1], zero);
    
    return result[0] > result[1] ? true : false;
};