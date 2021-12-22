/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let result = [], line = 1, str = "", pixels = 0;
    
    for (let x of s) {
        let idx = x.charCodeAt(0) - 97;
        if (pixels + widths[idx] <= 100) {
            str += x;
            pixels +=widths[idx];            
        } else {
            str = "" + x;
            pixels = 0 + widths[idx];
            line++;
        }
    }
    
    result[0] = line;
    result[1] = pixels;
    
    return result;
};