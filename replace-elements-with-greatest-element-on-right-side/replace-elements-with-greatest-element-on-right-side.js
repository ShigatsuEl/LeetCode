/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let curr = 0;
    let ele = 1;
    let num;
    while (curr !== arr.length - 1) {
        if (!num) num = arr[ele];
        if (num < arr[ele]) num = arr[ele];
        ele += 1;
        if (ele === arr.length) {
            arr[curr] = num;
            num = null;
            curr += 1;
            ele = curr + 1;
        }
    }
    arr[arr.length - 1] = -1;
    return arr;
};