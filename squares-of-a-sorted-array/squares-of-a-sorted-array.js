/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let arr=[]
  let left = 0
  let right = nums.length -1
  
  for(let i = nums.length -1 ; i >= 0  ;i--){
    let square
    if(Math.abs(nums[left]) < Math.abs(nums[right])){
      square = nums[right]
      right --
    } else{
      square = nums[left]
      left++
    }
    arr[i] = square* square
  } 
  return arr
  
  // for(let i = 0; i < nums.length ; i++){
  //     arr[i] = nums[i] * nums[i]
  //   }
  // return arr.sort((a,b) => a-b) 
};