// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Solution:

var moveZeroes = function(nums) {
  if(nums === null)
    return 0;
    let pos = 0
    
    for(let i = 0; i< nums.length; i++){ //iterate thru all vals
      if(nums[i] !== 0){ //if value at index i is not 0
        nums[pos++] = nums[i]//set value at index i to value of pos, & increment pos
      }
    }
  for( i = pos; i < nums.length; i++){ // starting at pos (how many values we foudn to be non 0
    nums[i] = 0//set remainder of values to be 0 to full length
  }
};

// or

// var moveZeroes = function(nums) {
//   let j = 0  // nonzero count

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
// 	  // swap elements
//       [nums[j], nums[i]] = [nums[i], nums[j]]
//       j++
//     }
//   }
// };
