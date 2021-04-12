/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let longest = 0;
    let i = 0;
    let j = 0;
    /**
     * The goal is to anchor i and find the longest range of [i, j].
     * When s[i, j] has a duplicate letter, we remove s[i] from the
     * set and move i to the next position so we don't include 
     * s[prev i] in the next range calculation.
     */
    while (i < s.length && j < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            longest = Math.max(longest, j - i + 1);
            j += 1;
        } else {
            set.delete(s[i]);
            i += 1;
        }
    }
    return longest;
};