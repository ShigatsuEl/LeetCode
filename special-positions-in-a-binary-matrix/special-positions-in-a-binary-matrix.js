/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let rows = mat.length, cols = mat[0].length;
    let result = 0;
    
    mat.forEach((row) => result += row.reduce((acc, cur) => acc += cur));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1) {
                let flag = true;
                
                for (let k = 0; k < cols; k++) {
                    if (j === k) continue;
                    if (mat[i][k] !== 0) {
                        flag = false;
                        result--;
                        break;
                    }
                }
                
                if (!flag) continue;
                
                for (let k = 0; k < rows; k++) {
                    if (i === k) continue;
                    if (mat[k][j] !== 0) {
                        result--;
                        break;
                    }
                }
                
            }
        }
    }
    
    return result;
};