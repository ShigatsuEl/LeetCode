/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let x of s) {
        if ("({[".includes(x)) {
            stack.push(x);
        } else {
            if (x === ")" && stack[stack.length - 1] === "(") {
                stack.pop();
            } else if (x === "}" && stack[stack.length - 1] === "{") {
                stack.pop();
            } else if (x === "]" && stack[stack.length - 1] === "[") {
                stack.pop();
            } else {
                console.log(stack)
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
};