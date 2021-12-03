/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let suffle = Array.from({length: indices.length});
    for (let i = 0; i < indices.length; i++) {
        suffle[indices[i]] = s.substring(i, i + 1);
    }
    return suffle.join("");
};