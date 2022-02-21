/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let a = 0;
    
    while (n) {
        a += Math.trunc(n % k);
        n = n / k;
    }
    
    return a;   
};