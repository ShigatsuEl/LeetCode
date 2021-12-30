/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    let sectors = Array.from({length: n}).fill(0);
    
    sectors[rounds[0] - 1] = 1;
    
    for (let i = 1; i < rounds.length; i++) {
        if (rounds[i] - rounds[i - 1] > 0) {
            for (let j = rounds[i - 1]; j < rounds[i]; j++) {
                sectors[j] += 1;
            }
        } else {
            for (let j = rounds[i - 1]; j < sectors.length; j++) {
                sectors[j] += 1;
            }
            for (let j = 0; j < rounds[i]; j++) {
                sectors[j] += 1;
            }
        }
    }
    
    let max = Math.max(...sectors);
    
    sectors = sectors.map((sector, i) => {
        if (sector === max) return i + 1;
        else return null;
    }).filter((sector) => sector !== null);
    
    return sectors;
};