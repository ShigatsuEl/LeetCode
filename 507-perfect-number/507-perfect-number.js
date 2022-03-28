/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) return false;
    
    let temp = 1, arr = [];
    
    while (num !== temp) {
        if (num % temp === 0) arr.push(temp);
        temp++;
    }
    
    return arr.reduce((acc, cur) => acc += cur) === num;
};