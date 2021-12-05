/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let representWord1 = word1.reduce((acc, cur) => acc += cur);
    let representWord2 = word2.reduce((acc, cur) => acc += cur);
    if (representWord1 === representWord2) {
        return true;
    } else {
        return false;
    }
};