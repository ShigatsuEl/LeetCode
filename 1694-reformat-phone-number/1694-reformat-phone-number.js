/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    number = number.replace(/-| /g, '').split('');
    
    let idx = 0, result = [];
    
    while (number.length !== 0) {
        if (number.length > 4) {
            result.push(number.slice(idx, idx + 3).join(''));
            number.splice(idx, idx + 3);
        } else if (number.length === 4) {
            result.push(number.slice(idx, idx + 2).join(''));
            result.push(number.slice(idx + 2, idx + 4).join(''));
            number.splice(idx, idx + 4);
        } else if (number.length === 3) {
            result.push(number.slice(idx, idx + 3).join(''));
            number.splice(idx, idx + 3);
        } else if (number.length === 2) {
            result.push(number.slice(idx, idx + 2).join(''));
            number.splice(idx, idx + 2);
        } else {
            return;
        }
    }
    
    return result.join('-');
};