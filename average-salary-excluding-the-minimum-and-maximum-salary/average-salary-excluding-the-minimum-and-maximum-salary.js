/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a, b) => a - b);
    salary.splice(0, 1);
    salary.splice(salary.length - 1, 1);
    
    return salary.reduce((acc, cur) => acc += cur) / salary.length;
};