/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let result = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j <board[0].length; j++) {
            if (board[i][j] === 'R') {
                // 위 라인 체크
                for (let a = i - 1; a >= 0; a--) {
                    if (board[a][j] === "B") break;
                    if (board[a][j] === "p") {
                        result++;
                        break;
                    }
                }
                // 아래 라인 체크
                for (let b = i + 1; b < board.length; b++) {
                    if (board[b][j] === "B") break;
                    if (board[b][j] === "p") {
                        result++;
                        break;
                    }
                }
                // 왼쪽 라인 체크
                for (let c = j - 1; c >= 0; c--) {
                    if (board[i][c] === "B") break;
                    if (board[i][c] === "p") {
                        result++;
                        break;
                    }
                }
                // 오른쪽 라인 체크
                for (let d = j + 1; d < board.length; d++) {
                    if (board[i][d] === "B") break;
                    if (board[i][d] === "p") {
                        result++;
                        break;
                    }
                }
            }
        }
    }
    
    return result;
};