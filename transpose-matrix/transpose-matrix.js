/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let result = [], arr = matrix.flat();
    
    for (let i = 0; i < arr.length / matrix.length; i++) {
        let j = i;
        let temp = [];
        while (j < arr.length) {
            temp.push(arr[j]);
            j += matrix[0].length;
        }
        result.push(temp);
        temp = [];
    }
    
    return result;
};