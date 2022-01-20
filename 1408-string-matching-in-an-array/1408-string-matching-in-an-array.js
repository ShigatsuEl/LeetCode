/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result = [];
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) continue;
            if (words[i].includes(words[j]) && !result.includes(words[j])) result.push(words[j]);
        }
    }
    
    return result;
};