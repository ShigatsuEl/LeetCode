/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    words.sort((a, b) => a.length - b.length);
    let cleanPlate = licensePlate.toLowerCase().split("").filter((s) => isNaN(s));
    let copyWords = [...words];
    let min = Math.min(...words.map((word) => word.length));
    
    for (let i = 0; i < words.length; i++) {
        let flag = true;
        words[i] = words[i].split("");
        for (let j = 0; j < cleanPlate.length; j++) {
            if (words[i].indexOf(cleanPlate[j]) > -1) {
                let idx = words[i].indexOf(cleanPlate[j]);
                words[i].splice(idx, 1);
            } else {
                flag = false;
                break;
            }
        }
        
        if (flag && copyWords[i].length >= min) return copyWords[i];
    }
};