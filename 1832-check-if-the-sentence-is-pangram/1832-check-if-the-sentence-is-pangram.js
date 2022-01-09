/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if (sentence.length < 26) return false;
    else {
        let hash = {};
        for (let x of sentence) {
            if (hash[x]) {
                hash[x] += 1;
            } else {
                hash[x] = 1;
            }
        }
        return Object.keys(hash).length === 26 ? true : false;
    }
};