/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let result = 0, left = '', right = '';
    
    for (let i = 0; i < s.length - 1; i++) {
        left += s[i];
        right = s.slice(i + 1);
        let leftSum = left.split('').reduce((acc, cur) => acc += cur === '0' ? 1 : 0, 0);
        let rightSum = right.split('').reduce((acc, cur) => acc += cur === '1' ? 1 : 0, 0);
        result = Math.max(result, leftSum + rightSum);
    }
    
    return result;
};