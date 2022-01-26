/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }, result = 0, str = '';
    
    for (let i = 0; i < s.length; i++) {
        str += s[i] + s[i + 1];
        if (obj[str]) {
            result += obj[str];
            i++;
        } else {
            result += obj[str[0]];
        }
        str = '';
    }
    
    return result;
};