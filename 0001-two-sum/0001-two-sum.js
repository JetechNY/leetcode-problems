/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0 ; i < nums.length; i++){
    for (let j = i+ 1; j < nums.length; j++){
      if (nums[i] + nums[j] == target){
      return [ i, j ];

      }
    }
  }    
};







// var twoSum = function(nums, target) {
//     if (nums.length === 2) return [0, 1];
//     const len = nums.length;
//     let hashmap = {};
//     for(let i = 0; i < len; i++) {
//         let diff = target - nums[i];
//         let find = hashmap[diff];
//         if(find !== undefined) return [find, i];
//         else hashmap[nums[i]] = i;
//     }
// }

