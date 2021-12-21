/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        word = word.split("");
        
        if ("qwertyuiop".includes(word[0])) {
            if (!word.every((char) => "qwertyuiop".includes(char))) {
                words.splice(i, 1);
                i--;
            }
        } else if ("asdfghjkl".includes(word[0])) {
            if (!word.every((char) => "asdfghjkl".includes(char))) {
                words.splice(i, 1);
                i--;
            }
        } else if ("zxcvbnm".includes(word[0])) {
            if (!word.every((char) => "zxcvbnm".includes(char))) {
                words.splice(i, 1);
                i--;
            }
        }
    }
    
    return words;
};