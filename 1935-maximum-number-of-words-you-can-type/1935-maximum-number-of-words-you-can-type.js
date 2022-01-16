/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(" ");
    
    let length = text.length, obj = {};
    
    for (let letter of brokenLetters) {
        if (!obj[letter]) {
            obj[letter] = 1;
        } else {
            obj[letter] += 1;
        }
    }
    
    for (let word of text) {
        for (let i = 0; i < word.length; i++) {
            if (obj[word[i]] === 1) {
                length--;
                break;
            }
        }
    }
    
    return length;
};