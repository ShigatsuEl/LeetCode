/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let result = '', map = new Map(), times = [releaseTimes[0]];
    
    for (let i = 1; i < releaseTimes.length; i++) {
        times.push(releaseTimes[i] - releaseTimes[i - 1]);
    }
    
    let max = Math.max(...times);
    
    for (let i = 0; i < times.length; i++) {
        if (times[i] === max) {
            map.set(keysPressed[i], times[i]);
        }
    }
    
    if (map.size === 1) return Array.from(map.keys())[0];
    else return Array.from(map.keys()).sort((a, b) => b.charCodeAt() - a.charCodeAt())[0];
};