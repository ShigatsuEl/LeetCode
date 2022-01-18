/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from({length: n}, (v, i) => {
        i = i + 1;
        if (i % 15 === 0) return "FizzBuzz";
        else if (i % 5 === 0) return "Buzz";
        else if (i % 3 === 0) return "Fizz";
        else return `${i}`;
    });
};