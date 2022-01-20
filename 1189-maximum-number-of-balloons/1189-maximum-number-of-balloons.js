/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let obj = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0
    };
    
    for (let x of text) {
        if (obj[x] !== undefined && (x === 'l' || x === 'o')) obj[x] += 0.5;
        else if (obj[x] !== undefined) obj[x] += 1;
    }
    
    return Math.floor(Math.min(...Object.values(obj)));
};