/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sum = (first, next) => first + next;
    
    const sumAlice = aliceSizes.reduce(sum);
    const sumBob = bobSizes.reduce(sum);
    
    // sum of both together has to be even for this to work
    // if ( (sumA + sumB) % 2 !== 0 ) return false;
    
    const mid = (sumAlice + sumBob) / 2;
    
    const setB = new Set(bobSizes);      
    
    for (let i=0; i< aliceSizes.length; i++ ) {     
        const current = aliceSizes[i];
        const withoutCurrent = sumAlice - current;
        const searchedItem = mid - withoutCurrent;
                       
        if ( setB.has(searchedItem) && sumBob - searchedItem + current === mid ) {
            return [ aliceSizes[i], searchedItem ];
        }        
    }   
};