/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let pointer = "a".charCodeAt(0) - 96, result = 0;
    
    for (let x of word) {
        let temp = x.charCodeAt(0) - 96;
        if (pointer === temp) {
            result++;
        } else {
            let diff = Math.abs(temp - pointer);
            if (diff > 26 - (diff)) {
                result += 26 - (diff) + 1;
            } else {
                result += diff + 1;
            }
        }
        pointer = temp;
    }
    
    return result;
};