/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let result = [], arr = s.split("");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === c) result.push(0);
        else {
            let idx = arr.slice(i).indexOf(c);
            result.push(idx);
        }
    }
    
    arr.reverse();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === c) continue;
        else {
            let idx = arr.slice(i).indexOf(c);
            if (Math.min(idx, result[result.length - 1 - i]) > 0) {
                result[result.length - 1 - i] = Math.min(idx, result[result.length - 1 - i]);
            }
            if (result[result.length - 1 - i] < 0) {
                result[result.length - 1 - i] = idx;
            }
        }
    }
    
    return result;
};