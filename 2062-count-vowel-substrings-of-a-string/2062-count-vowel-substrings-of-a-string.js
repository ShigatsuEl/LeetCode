/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let obj = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    }, result = 0;
    
    for (let i = 0; i < word.length - 4; i++) {
        if (obj[word[i]] === 1) {
            let set = new Set();
            for (let j = i; j < word.length; j++) {
                set.add(word[j]);
                if (set.size === 5 && set.has('a') && set.has('e') && set.has('i') && set.has('o') && set.has('u')) {
                    result++;
                }
            }
        }
    }
    
    return result;
};