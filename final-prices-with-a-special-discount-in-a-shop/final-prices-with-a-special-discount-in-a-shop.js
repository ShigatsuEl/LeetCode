/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = prices, discount = prices[0];
    
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] >= prices[j]) {
                discount = prices[i] - prices[j];
                break;
            }
        }
        result[i] = discount;
        discount = result[i + 1];
    }
    
    return result;
};