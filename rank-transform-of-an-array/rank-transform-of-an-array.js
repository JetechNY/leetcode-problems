/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  let ranks = new Map()
  let cloneArray = [...new Set(arr)]
  
  cloneArray.sort((a, b) => a - b)
  cloneArray.forEach((n, i) => ranks.set(n, i))
  
  return arr.map(n => {
    // using map.get(n) faster than cloneArray.indexOf(n) 99 times
    //  and faster than use object 2 times
    return ranks.get(n) + 1
  })
};