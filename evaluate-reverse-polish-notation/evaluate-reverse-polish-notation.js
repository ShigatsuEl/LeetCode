/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let x of tokens) {
        if (!isNaN(x)) {
            stack.push(x);
        } else {
            let operand2 = parseInt(stack.pop());
            let operand1 = parseInt(stack.pop());
            
            if (x === "+") {
                stack.push((operand1 + operand2));
            } else if (x === "-") {
                stack.push((operand1 - operand2));
            } else if (x === '*') {
                stack.push((operand1 * operand2));
            } else {
                stack.push(parseInt(operand1 / operand2));
            }
        }
    }
    return stack[0];
};