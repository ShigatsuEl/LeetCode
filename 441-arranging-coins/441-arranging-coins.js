/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n === 1) return 1;
    
    let i = 1;
    
    while (n >= i) {
        n -= i;
        i++;
    }
    
    return --i;
};