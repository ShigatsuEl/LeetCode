/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = 0, teams = n, result = 0;
    
    if (teams === 1) return 0;
    
    while (teams >= 2) {
        if (teams % 2 === 1) {
            matches = (teams - 1) / 2;
            teams = (teams - 1) / 2 + 1;
        } else {
            matches = teams / 2;
            teams = teams / 2;
        }
        
        result += matches;
    }
    
    return result;
};