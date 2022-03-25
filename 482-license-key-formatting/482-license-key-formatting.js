/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const raw = s.replace(/-/g, '').toUpperCase();
    let length = raw.length, chunks = [];
    while (length > 0) {
        chunks.push(raw.substring(length - k, length));
        length -= k;
    }
    return chunks.reverse().join('-');
};