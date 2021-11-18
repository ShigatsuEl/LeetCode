/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 1, right = 2;
    while (left !== numbers.length) {
        if(numbers[left - 1] + numbers[right - 1] === target) {
            return [left, right];
        } else {
            right++;
            if (right > numbers.length) {
                left++;
                right = left + 1;
            }
        }
    }
};