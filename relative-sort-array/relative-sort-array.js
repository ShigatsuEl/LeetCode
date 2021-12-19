/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = [], noAppear = [];
    
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            noAppear.push(arr1[i]);
            arr1.splice(i, 1);
            i--;
        }
    }
    
    noAppear.sort((a, b) => a - b);
    
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) result.push(arr2[i]);
        }
    }
    
    return result.concat(noAppear);
};