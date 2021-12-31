/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let rank = [...score], length = score.length;;
    
    while (length !== 0) {
        let max = Math.max(...score);
        let idx = score.indexOf(max);
        rank[idx] = String(score.length - length + 1);
        score[idx] = null;
        length--;
    }
    
    rank = rank.map((v) => {
        if (v === '1') return "Gold Medal";
        else if (v === '2') return "Silver Medal";
        else if (v === '3') return "Bronze Medal";
        else return v;
    })
    
    return rank;
};