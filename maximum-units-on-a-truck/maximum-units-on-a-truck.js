/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let output = 0, obj = {};
    
    // 키와 값을 반대로 대입한 obj 객체를 만든다
    for (let i = 0; i < boxTypes.length; i++) {
        if (obj[boxTypes[i][1]]) {
            obj[boxTypes[i][1]] += boxTypes[i][0];
        } else {
            obj[boxTypes[i][1]] = boxTypes[i][0];
        }
    }
    console.log(obj)
    
    while (truckSize > 0 && Object.keys(obj).length) {
        let max = Math.max(...Object.keys(obj).map((val) => Number(val)));
        if (truckSize >= obj[max]) {
            truckSize -= obj[max];
            output += obj[max] * max;
            delete obj[max];
        } else {
            output += max * truckSize;
            truckSize = 0;
             delete obj[max];
        }
        // console.log(max, obj[max], output, truckSize)
    }
    
    return output;
};