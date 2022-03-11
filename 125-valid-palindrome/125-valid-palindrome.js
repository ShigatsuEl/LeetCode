/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[\W_]+/g," ").split(' ').join('').toLowerCase();
    
    return s === s.split('').reverse().join('') ? true : false;
};