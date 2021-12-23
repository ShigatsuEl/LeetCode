/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let type = {}, length = candyType.length / 2;
    
    for (let x of candyType) {
        type[x] = 1;
    }
    
    let typeLength = Object.keys(type).length;
    
    if (typeLength >= length) {
        return length;
    } else {
        return typeLength;
    }
};