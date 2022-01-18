/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let alpha = "abcdefghijklnmopqrstuvwxyz".split("");
    let word1_d = new Array(26).fill(0);
    let word2_d = new Array(26).fill(0);
    let word1_l = word1.split("");
    let word2_l = word2.split("");
    
    for(let v of word1_l){
        word1_d[alpha.indexOf(v)]+=1
    }
    
    for(let v of word2_l){
        word2_d[alpha.indexOf(v)]+=1
    }
    
    for(let i = 0; i < 26; i++){
        if (Math.abs(word1_d[i] - word2_d[i]) > 3) return false;
    }
    
    return true;
};