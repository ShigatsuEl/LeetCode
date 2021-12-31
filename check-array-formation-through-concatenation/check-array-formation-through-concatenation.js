/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    
    for (let i = 0; i < pieces.length; i++) {
        for (let j = 0; j < pieces[i].length; j++) {
            if (pieces[i].length === 1) {
                if (arr.indexOf(pieces[i][j]) > -1) continue;
                else return false;
            }
            else {
                let idx = arr.indexOf(pieces[i][0]);
                if (arr[idx + j] !== pieces[i][j]) return false;
            }
        }
    }
    
    return true;
};