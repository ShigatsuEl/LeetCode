/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let map = new Map(), quarter = arr.length / 4;
    
    for (let x of arr) {
        if (map.has(x)) map.set(x, map.get(x) + 1);
        else map.set(x, 1);
    }
    
    for (let [key, value] of map) {
        if (value > quarter) return key;
    }
};