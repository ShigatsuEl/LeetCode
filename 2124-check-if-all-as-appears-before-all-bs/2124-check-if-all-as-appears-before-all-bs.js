/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let temp = s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
    
    return temp === s ? true : false;
};