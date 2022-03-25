/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2).split('').reverse();
    y = y.toString(2).split('').reverse();
    
    let answer = 0;
    let longest = x.length > y.length ? x : y;
    
    for (let i = 0; i < longest.length; i++) {
        if (!x[i]) x[i] = '0';
        if (!y[i]) y[i] = '0';
        if (x[i] !== y[i]) answer++;
    }
    
    return answer;
};