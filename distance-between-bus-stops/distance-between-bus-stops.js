/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let left = 0, right = 0;
    if (start < destination) {
        for (let i = start; i < destination; i++) {
            right += distance[i];
        }
    } else {
        for (let i = start; i < distance.length; i++) {
            right += distance[i];
        }
        for (let i = 0; i < destination; i++) {
            right += distance[i];
        }
    }
    
    left = distance.reduce((acc, cur) => acc += cur) - right;
    
    return Math.min(left, right);
};