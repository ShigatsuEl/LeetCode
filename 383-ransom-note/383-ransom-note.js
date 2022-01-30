/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let rsnObj = {}, magObj = {};
    
    ransomNote.split('').forEach((v) => rsnObj[v] = (rsnObj[v] || 0) + 1);
    magazine.split('').forEach((v) => magObj[v] = (magObj[v] || 0) + 1);
    
    for (let x in rsnObj) {
        if (!rsnObj[x] || !magObj[x] || rsnObj[x] > magObj[x]) return false;
    }
    
    return true;
};