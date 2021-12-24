/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let result = [], map = new Map();
    
    for (let x of arr) {
        if (map.has(x)) map.set(x, map.get(x) + 1);
        else map.set(x, 1);
    }
    
    
    for (let [key, value] of map) {
        if (key === value) result.push(key);
    }
    
    return result.sort((a, b) => b - a)[0] ?? -1;
};