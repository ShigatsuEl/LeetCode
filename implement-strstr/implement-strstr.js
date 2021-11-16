/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (haystack.indexOf(needle) >= 0) {
        return haystack.indexOf(needle);
    } else {
        return -1;
    }
};