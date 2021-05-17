/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const map = new Map();
    // value -> rank 
    
    let rank = 1;
    [...arr].sort((a,b) => a - b).forEach((number) => {
        if (!map.has(number)) {
            map.set(number, rank);
            rank += 1;
        }
    })
    
    return arr.map(number => map.get(number));
};