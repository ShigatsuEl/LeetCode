/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let firstStr = letters.filter((letter) => letter > target)[0]?.substring(0, 1);
    if (!firstStr) return letters[0];
    
    let result = [];
    
    for (let letter of letters) {
        if (letter.indexOf(firstStr) === 0) result.push(letter);
    }
    
    return result.sort((a, b) => a.length < b.length)[0];
};