/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let findIdx = word.indexOf(ch);
    
    if (findIdx > -1) {
        let left = word.substring(0, findIdx + 1);
        let right = word.substring(findIdx + 1);
        
        return left.split('').reverse().join('') + right;
    }
    
    return word;
};