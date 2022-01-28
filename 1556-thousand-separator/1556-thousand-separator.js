/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n = ('' + n).split('').reverse();
    
    for (let i = 3; i < n.length; i += 4) {
        n.splice(i, 0, '.');
    }
    
    return n.reverse().join('');
};