/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let result = [], range = [0, 0], temp = s[0];
    
    for (let i = 0; i < s.length; i++) {
        if (temp === s[i]) {
            range[1] = i;
        } else {
            if (range[1] - range[0] >= 2) result.push(range);
            temp = s[i];
            range = [i, i];
        }
    }
    
    if (range[1] - range[0] >= 2) result.push(range);
    
    return result.sort((a, b) => a[0] - b[0]);
};