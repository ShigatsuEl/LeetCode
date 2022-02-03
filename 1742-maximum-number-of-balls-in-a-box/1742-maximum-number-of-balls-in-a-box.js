/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let obj = {};
    
    for (let i = lowLimit; i < highLimit + 1; i++) {
        let idx = ('' + i).split('').reduce((acc, cur) => acc += Number(cur), 0);
        obj[idx] = (obj[idx] || 0) + 1;
    }
    
    return Math.max(...Object.values(obj));
};