/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = "";
    for (i in strs[0]) {
      if (!strs.every((el) => el[i] === strs[0][i])) break;
      ans += strs[0][i];
    }
  return ans;
};