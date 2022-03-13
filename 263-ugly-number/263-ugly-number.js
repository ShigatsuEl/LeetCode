/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n <= 0) return false; 
    
    while(parseInt(n / 2) === n / 2) { n /= 2; }  // using the fact that 
    while(parseInt(n / 3) === n / 3) { n /= 3; }  // multiplication is commutative, 
    while(parseInt(n / 5) === n / 5) { n /= 5; }  // hence the order doesn't matter
    
    return n === 1;
};