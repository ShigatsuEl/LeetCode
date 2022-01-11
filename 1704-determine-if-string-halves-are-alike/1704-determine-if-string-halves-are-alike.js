/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    s = s.toLowerCase();
    
    let halfLength= s.length / 2;
    let a = s.substring(0, halfLength), b = s.substring(halfLength);
    let aVowel = 0, bVowel = 0;
    
    for (let i = 0; i < halfLength; i++) {
        if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') {
            aVowel += 1;
        }
        if (b[i] === 'a' || b[i] === 'e' || b[i] === 'i' || b[i] === 'o' || b[i] === 'u') {
            bVowel += 1;
        }
    }
    
    return aVowel === bVowel ? true : false;
};