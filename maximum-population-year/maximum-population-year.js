/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let map = new Map();
    
    logs.sort((a, b) => a[0] - b[0]);
    
    for (let i = 0; i < logs.length; i++) {
        let count = 0;
        let birth = logs[i][0], death = logs[i][1];
        while (birth + count !== death) {
            if (map.has(birth + count)) map.set(birth + count, map.get(birth + count) + 1);
            else map.set(birth + count, 1);
            count++;
        }
    }
    
    let max = Math.max(...map.values());
    return [...map.entries()].filter((value) => value[1] === max)[0][0];
};