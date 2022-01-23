/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    date = date.split(' ');
    
    let month = {
        "Jan": '01',
        "Feb": '02',
        "Mar": '03',
        "Apr": '04',
        "May": '05',
        "Jun": '06',
        "Jul": '07',
        "Aug": '08',
        "Sep": '09',
        "Oct": '10',
        "Nov": '11',
        "Dec": '12'
    }
    
    let day = date[0].substring(date[0].length - 2, 0);
    
    date[0] = day.length === 1 ? '0' + day : day;
    date[1] = month[date[1]];
    
    return date.reverse().join('-');
};