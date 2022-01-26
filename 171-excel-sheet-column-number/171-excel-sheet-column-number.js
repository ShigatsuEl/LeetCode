/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    columnTitle = columnTitle.split('').reverse('').join('');
    
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        result += Math.pow(26 , i) * (columnTitle[i].charCodeAt(0) - 64);
    }
    
    return result;
};