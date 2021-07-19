/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let result = []
  let left = 0
  let right = nums.length -1
  
  let insertIndex = nums.length -1
  
  while(left <= right){
    let num1 = nums[left]*nums[left]
    let num2 = nums[right]*nums[right]
    
    if(num1 > num2){
      result[insertIndex] = num1
      left++
    } else {
      result[insertIndex] = num2
      right--
    }
    insertIndex--
  }
  return result
};