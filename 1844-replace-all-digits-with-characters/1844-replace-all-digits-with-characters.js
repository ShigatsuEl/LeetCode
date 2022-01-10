/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    }
    
    for (let i = 0; i < s.length - 1; i += 2) {
        let charCode = s.charCodeAt(i);
        charCode += +s[i + 1];
        s = s.replaceAt(i + 1, String.fromCharCode(charCode));
    }
    
    return s;
};