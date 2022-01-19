/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let obj = {};
    
    function addSentenceToObj(sentence) {
        sentence.split(' ').forEach((word) => {
            if (!obj[word]) obj[word] = 1;
            else obj[word] += 1;
        })
    }
    
    addSentenceToObj(s1);
    addSentenceToObj(s2);
    
    return Object.entries(obj).filter(([key, value]) => value === 1).map(([key, value]) => key);
};