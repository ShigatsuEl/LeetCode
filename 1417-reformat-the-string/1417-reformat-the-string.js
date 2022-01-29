/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let alpha = '', digit = '', result = '';
    
    for (let x of s) {
        if (isNaN(parseInt(x))) alpha += x;
        else digit += x;
    }
    
    if (Math.abs(alpha.length - digit.length) > 1) return '';
    else {
        let short = alpha.length - digit.length > 0 ? digit : alpha;
        let long = alpha.length - digit.length > 0 ? alpha : digit;
        
        for (let i = 0; i < short.length; i++) {
            result += long[i] + short[i];
        }
        
        if (short.length !== long.length) result += long[long.length - 1];
    }
    
    return result;
};