/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split('').map((v) => Number(v));
    
    let prod = n.reduce((acc, cur) => acc *= cur);
    let sum = n.reduce((acc, cur) => acc += cur);
    
    return prod - sum;
};