/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length === 1) return false;
    
    let obj = {}, res = 0;
    
    for (let num of deck) {
        obj[num] = (obj[num] || 0) + 1;
    }
    
    for (let bucket of Object.values(obj)) {
        res = gcd(res, bucket);
    }
    
    return res > 1;

};

function gcd (a, b) {
    return b > 0 ? gcd(b, a % b) : a;
}