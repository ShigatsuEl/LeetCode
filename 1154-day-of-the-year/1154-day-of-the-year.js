/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], result = 0;
    
    date = date.split('-');
    
    result = (date[1] === '01' ? 0 : dayOfMonth.slice(0, parseInt(date[1]) - 1).reduce((acc, cur) => acc += cur, 0)) + parseInt(date[2]);
    
    return (((date[0] % 4 == 0) && (date[0] % 100 != 0)) || (date[0] % 400 == 0)) && date[1] > 2 ? result + 1 : result;
};