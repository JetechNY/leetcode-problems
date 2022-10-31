/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let starts = intervals.slice().sort((a,b) => a[0]-b[0])
    let ends = intervals.sort((a,b)=>a[1]-b[1])
    let rooms = 0
    let end = 0
    for (let i=0;i < intervals.length; i++){
      starts[i][0] < ends [end][1] ? rooms++ : end ++
    }
  return rooms
};