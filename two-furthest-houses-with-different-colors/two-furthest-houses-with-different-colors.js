/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    if (colors.length === 2) return 1;
    
    let max = 0;
    
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === colors[0]) continue;
        else {
            max = Math.max(max, i - 0);
        }
    }
    
    let colorLength = colors.length - 1;
    
    for (let i = colorLength; i >= 0; i--) {
        if (colors[i] === colors[colorLength]) continue;
        else {
            max = Math.max(max, colorLength - i);
        }
    }
    
    return max;
};