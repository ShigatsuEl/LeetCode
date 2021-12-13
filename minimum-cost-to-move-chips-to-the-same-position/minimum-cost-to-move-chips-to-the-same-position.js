/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0;
    let even = 0;
    position.map((x) => (x % 2 ? (odd += 1) : (even += 1)));
    return Math.min(odd, even);

};