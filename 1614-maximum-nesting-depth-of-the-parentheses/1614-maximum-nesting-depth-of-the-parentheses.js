/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let str = s.match(/[()]/g, '')
    let balance = 0

    if (!str) return 0

    return str.reduce((depth, c) => {
        c === '(' ? balance++ : balance--
        return Math.max(balance, depth)
    }, 0)

};