/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let result = 0;
    
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    for (let i = 0; result < g.length && i < s.length; i++)
        if (g[result] <= s[i])
            result++;
    
    return result;
};