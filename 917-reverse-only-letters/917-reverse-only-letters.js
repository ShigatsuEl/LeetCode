/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let left = 0, right = s.length - 1, result = [...s];
   
    const regex = /([^A-Z|a-z])/g;
    
    
    while (left < right) {
        if (s[left].search(regex) !== -1) {
            left++;
            continue;
        }
        if (s[right].search(regex) !== -1) {
            right--;
            continue;
        }
        result[left] = s[right];
        result[right] = s[left];
        left++;
        right--;
    }
    
    return result.join('');
};