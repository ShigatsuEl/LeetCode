/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) return 0;
    
    while (num.toString().length !== 1) {
        num = num.toString().split('').map((v) => parseInt(v)).reduce((acc, cur) => acc += cur);
    }
  
    return num;
};