/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let count = 1, posArr = [];
    
    while (k !== 0) {
        if (!arr.includes(count)) {
            posArr.push(count);
            count++;
            k--;
        } else {
            count++;
            continue;
        };
    }
    
    return posArr[posArr.length - 1];
};