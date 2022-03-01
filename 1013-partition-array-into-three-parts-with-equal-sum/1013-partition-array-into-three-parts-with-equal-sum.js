/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    var sum = 0;
    arr.forEach(val => {
        sum += val;    
    });
    var count = 0;
    var temp = 0;
    arr.forEach(val => {
        temp += val;
        if (temp === sum / 3) {
            count++;
            temp = 0;
        }
    });
    return count >= 3;
};