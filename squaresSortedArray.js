// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// Solution:
// var sortedSquares = function(nums) {
//     return (nums.map(e => e*e).sort((a,b) => a-b))
//     };

// This has a n**2 big O
// Set one pointer at the beginning of the array
// Set second pointer at the end of the array
// Compare the squared numbers at the pointer’s location
// Fill in the result array backwards

var sortedSquares = function(nums) {
  let result = []
  let left = 0
  let right = nums.length -1
  let index = right
  
  while(left <= right){
    let num1 = nums[left]**2
    let num2 = nums[right]**2
    if(num1 > num2){
      result[index] = num1
      left++
    } else {
      result[index] = num2
      right--
    }
    index--
  }
  return result
};


