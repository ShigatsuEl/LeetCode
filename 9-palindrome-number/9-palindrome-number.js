/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString().split('');
    
    return x.join('') === x.reverse().join('') ? true : false;
};