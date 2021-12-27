/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let result = 0, idx = 0;
    
    while (tickets[k] !== 0) {
        if (tickets[idx % tickets.length] === 0) {
            idx++;
            continue;
        } else {
            tickets[idx % tickets.length] -= 1;
            result++;
            idx++;
        }
    }
    
    return result;
};