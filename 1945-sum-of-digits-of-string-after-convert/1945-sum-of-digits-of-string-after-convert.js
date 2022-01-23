/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    s = s.split('').map((v) => v.charCodeAt(0) - 96).join('');
    
    for (let i = 0; i < k; i++) {
        s = '' + s.split('').reduce((acc, cur) => acc += parseInt(cur), 0);
    }
    
    return parseInt(s);
};