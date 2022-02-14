/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let fn = 0, fn_1 = 1, fn_2 = 1, fn_3 = 0, idx = 3, res = 2;
    
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    while (n >= idx) {
        fn = fn_1 + fn_2 + fn_3;
        res = fn;
        fn_3 = fn_2;
        fn_2 = fn_1;
        fn_1 = fn;
        idx++;
    }
    
    return res;
};