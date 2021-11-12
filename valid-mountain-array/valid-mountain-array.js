/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const n = arr.length;
    if (n < 3) return false;
    let i = 1;
    let rise = false;
    let drop = false;
    while (arr[i - 1] < arr[i]) {
      i++;
      rise = true;
    }
    if (arr[i - 1] === arr[i]) return false;
    while (arr[i - 1] > arr[i]) {
      i++;
      drop = true;
    }
    return i === n && rise && drop;
};