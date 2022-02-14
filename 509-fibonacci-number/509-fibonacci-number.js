/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fn = 0, fn_1 = 1, fn_2 = 0, idx = 2;
    
    if (n === 1) return 1;
    
    while (n >= idx) {
        fn = fn_1 + fn_2;
        fn_2 = fn_1;
        fn_1 = fn;
        idx++;
    }
    
    return fn;
};