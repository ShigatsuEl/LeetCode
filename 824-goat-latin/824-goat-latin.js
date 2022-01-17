/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let obj = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    } 
   
    sentence = sentence.split(' ').map((word, i) => {
        if (obj[word[0].toLowerCase()] === 1) {
            word += 'ma' + 'a'.repeat(i + 1);
        } else {
            word = word.slice(1) + word[0];
            word += 'ma' + 'a'.repeat(i + 1);
        }
        return word;
    });
    
    return sentence.join(' ');
};