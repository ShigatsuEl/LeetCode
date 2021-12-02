/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = Array.from({length: candies.length}, () => true), sumCandy = [];
    sumCandy = candies.map((candy) => candy + extraCandies);
    for (let i = 0; i < sumCandy.length; i++) {
        for (let j = 0; j < candies.length; j++) {
            if (sumCandy[i] < candies[j]) {
                result[i] = false;
            }
        }
    }
    return result;
};