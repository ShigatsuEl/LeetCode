/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    return parseInt(n.toString(2).split('').map((v) => {
        if (v === '1') return '0';
        else return '1';
    }).join(''), 2);
};