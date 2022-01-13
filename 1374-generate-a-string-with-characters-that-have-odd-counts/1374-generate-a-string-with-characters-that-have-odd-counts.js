/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if (n === 1) return 'a';
    
    let result = "";
    
    if (n % 2 === 0) {
        for (let i = 0; i < n - 1; i++) {
            let a = String.fromCharCode(97);
            result = result.concat(a);
        }
        result = result.concat(String.fromCharCode(98));
    } else {
        for (let i = 0; i < n - 2; i++) {
            let a = String.fromCharCode(97);
            result = result.concat(a);
        }
        result = result.concat(String.fromCharCode(98), String.fromCharCode(99));
    }
    
    return result;
};