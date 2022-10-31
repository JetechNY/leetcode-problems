/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  var prev = intervals[0]
  var result = [prev]
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      result.push(curr)
      prev = curr
    }
  }
  return result
}