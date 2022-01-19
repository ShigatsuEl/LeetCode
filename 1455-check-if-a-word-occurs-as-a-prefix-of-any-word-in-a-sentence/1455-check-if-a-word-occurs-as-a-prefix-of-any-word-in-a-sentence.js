/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let result = -1;
    
    sentence = sentence.split(' ');
    
    for (let i = 0; i < sentence.length; i++) {
        let flag = true;
        
        for (let j = 0; j < searchWord.length; j++) {
            if (sentence[i][j] !== searchWord[j]) {
                flag = false;
                break;
            }
        }
        
        if (flag === true) {
            result = i + 1;
            break;
        }
    }
    
    return result;
};