/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let result = [];
    
    for (let i = 0; i < logs.length; i++) {
        if (logs.length !== 0 && logs[i] === '../') {
            result.pop();
        } else if (logs[i] === './') {
            continue;
        } else {
            result.push(logs[i]);
        }
    }
    
    return result.length;
};