/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let squares = [], largest = 0;
    for (let i = 0; i < rectangles.length; i++) {
        if (rectangles[i][0] > rectangles[i][1]) {
            squares.push(rectangles[i][1]);
        } else {
            squares.push(rectangles[i][0]);
        }
    }
    largest = Math.max(...squares);
    return squares.filter((square) => square === largest).length;
};