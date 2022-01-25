/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let map = new Map();
    let maxDist = -1;
    
    for (let i = 0; i < s.length; i++){
        let ch = s.charAt(i);
        if (!map.has(ch)){
            map.set(ch, i);
        } else {
            let lastIdx = map.get(ch);
            let dist = i-lastIdx-1
            maxDist = Math.max(maxDist, dist);
        }
    }
    return maxDist;
};