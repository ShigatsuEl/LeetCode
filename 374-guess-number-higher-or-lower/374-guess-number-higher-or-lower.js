/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let pick = 0, min = 1;
    while (guess(pick)) {
        pick = Math.floor(Math.random() * (n - min + 1)) + min;
        if (guess(pick) === 1) min = pick;
        else n = pick;
    }
    
    return pick;
};