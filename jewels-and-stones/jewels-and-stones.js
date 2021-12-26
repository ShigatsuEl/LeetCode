/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result = 0;
    
    for (let stone of stones) {
        if (jewels.includes(stone)) result++;
    }
    
    return result;
};