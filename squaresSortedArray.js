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

var sortedSquares = function(nums) {//fills in result array backwards
  let result = [] //set new empty array
  let left = 0 // use pointers, left
  let right = nums.length -1// use pointer, right
  let index = right// set index to last value, third pointer
  
  while(left <= right){ // keep doing while left and right are different vals
    let num1 = nums[left]**2//square left value
    let num2 = nums[right]**2//square right value
    if(num1 > num2){ //compare squared vals, if num1 is greater than num 2
      result[index] = num1 //store the num1 squared val in result at index of last value, at the end
      left++ //move left up one
    } else {
      result[index] = num2 //otherwise num2 is larger so store that value at last index instead
      right--//move right down one
    }
    index--// when completed adding number to new result array move the index number down one
  }
  return result//return the backward added array
};


