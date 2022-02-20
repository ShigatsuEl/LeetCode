/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let max = 9;
    
    num = num.toString();
    
    
    for (let i = 0; i < num.length; i++) {
        if (num[i] === '6') {
            num = num.replace('6', '9');
            return Number(num);
        }
    }
    
    return Number(num);
};