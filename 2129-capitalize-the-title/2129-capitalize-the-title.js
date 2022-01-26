/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title = title.split(' ');
    
    for (let i = 0; i < title.length; i++) {
        if (title[i].length > 2) {
            title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1).toLowerCase();
        } else {
            title[i] = title[i].toLowerCase();
        }
    }
    
    return title.join(' ');
};