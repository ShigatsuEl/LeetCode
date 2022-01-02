/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let low = list1.length > list2.length ? list2 : list1;
    let high = list1.length > list2.length ? list1 : list2;
    let map = new Map();
    
    for (let i = 0; i < low.length; i++) {
        let idx = high.findIndex((v) => v === low[i]);
        if (idx > -1) {
            map[low[i]] = 0;
            map[low[i]] += i;
            map[low[i]] += idx;
        }
    }
    
    let min = Math.min(...Object.values(map));
    
    return Object.entries(map).filter((arr) => arr[1] === min).map((v) => v[0]);
};