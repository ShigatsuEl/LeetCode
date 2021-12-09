/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let num = Math.floor(n / 2); 
    let result = [];

    for(let i=1;i<=num;i++) {
        result.push(i, -i);
       } 

    if(n % 2 !== 0) {
        result.push(0);
    }
  
    return result ;
};