/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let first = num.reduce((acc, cur, i) => acc += '' + cur);
    let sum = BigInt(first) + BigInt(k);
    
    return (sum + '').split('');
};