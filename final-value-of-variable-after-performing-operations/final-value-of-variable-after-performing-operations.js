/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;
    operations.forEach((operation) => {
        if (operation === "++X" || operation === "X++") {
            result += 1;
        } else {
            result -= 1;
        }
    })
    return result;
};