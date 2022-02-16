/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let result = [0, 1];
    
    if (n < 2) return n;
    
    for (let i = 2; i <= n; i++) {
        if (i % 2 == 0){
            result[i] = result[parseInt(i / 2)];
        }else{ 
            result[i] = result[parseInt(i / 2)] + result[parseInt(i / 2) + 1];
        }
    }
    
    return Math.max(...result);
};