/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if (k === 0) {
        return code.map(() => 0);
    } else if (k > 0) {
        code = code.map((v, i) => {
            let num = 0;
            for (let j = 1; j <= k; j++) {
                num += code[(i + j) % code.length];
            }
            return num;
        })
        return code;
    } else {
        code = code.map((v, i) => {
            let num = 0;
            for (let j = 1; j <= Math.abs(k); j++) {
                if ((i - j) % code.length >= 0) {
                    num += code[(i - j) % code.length];
                } else {
                    let idx = Math.abs((i - j) % code.length);
                    num += code[code.length - idx];
                }
            }
            return num;
        })
        return code;
    }
};