/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let curr = 0;
    let point = 0;
    while (curr !== arr.length){
        if (arr[point] === 2 * arr[curr] && curr !== point) {
            return true;
        } else {
            point += 1;
            if (point === arr.length) {
                point = 0;
                curr += 1;
            }
        }
    }
    return false;
};