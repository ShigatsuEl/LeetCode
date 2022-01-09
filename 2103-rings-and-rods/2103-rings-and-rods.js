/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let obj = {}, result = 0;
    
    for (let i = 0; i < rings.length; i += 2) {
        let pair = rings.substring(i, i + 2);
        
        if (obj[pair[1]]) {
            obj[pair[1]] += pair[0];
        } else {
            obj[pair[1]] = '' + pair[0];
        }
    }
    
    for (let x in obj) {
        if (obj[x].includes('B') && obj[x].includes('G') && obj[x].includes('R')) {
            result++;
        }
    }
    
    return result;
};