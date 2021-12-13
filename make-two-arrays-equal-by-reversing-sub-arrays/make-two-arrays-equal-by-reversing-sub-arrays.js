/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let targetObj = {}, arrObj = {};
    
    for (let x of target) {
        if (targetObj[x]) {
            targetObj[x] += 1;
        } else {
            targetObj[x] = 1;
        }
    }

    for (let x of arr) {
        if (arrObj[x]) {
            arrObj[x] += 1;
        } else {
            arrObj[x] = 1;
        }
    }
    
    for (let x in targetObj) {
        if (targetObj[x] !== arrObj[x]) return false;
    }
    
    return true;
};