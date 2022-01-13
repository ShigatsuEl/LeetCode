/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let chessboard = coordinates.split("");
    let charCode = chessboard[0].charCodeAt(0);
    
    if (charCode % 2 === 1) {
        return chessboard[1] % 2 === 0 ? true : false;
    } else {
        return chessboard[1] % 2 === 0 ? false : true;
    }
};