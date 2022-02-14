/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];
    
    for (let i = 0; i < n + 1; i++) {
        let num = i.toString(2);
        num = num.replaceAll('0', '');
        result.push(num.length);
    }
    
    return result;
};