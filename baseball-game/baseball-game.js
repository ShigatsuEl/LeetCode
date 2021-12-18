/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result = [];
    
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
            result.push(result[result.length - 1] + result[result.length - 2]);
        } else if (ops[i] === "D") {
            result.push(result[result.length - 1] * 2)
        } else if (ops[i] === "C") {
            result.pop();
        } else {
            result.push(parseInt(ops[i]));
        } 
    }
    
    return result.reduce((acc, cur) => acc += cur);
};