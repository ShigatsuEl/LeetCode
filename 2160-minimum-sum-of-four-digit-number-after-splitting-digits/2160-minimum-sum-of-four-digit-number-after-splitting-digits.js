/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = ('' + num).split('').map((v) => Number(v)).sort((a, b) => a - b);
    
    return 10 * num[0] + num[2] + 10 * num[1] + num[3];
};