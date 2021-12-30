/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    
    for (let i = 0; i < timeSeries.length; i++) {
        let diff = timeSeries[i+1] - timeSeries[i];
        if (diff < duration) total += diff;
        else total += duration;
    }
    return total;
};