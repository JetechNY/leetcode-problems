/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            nums[++i] = nums[j];
        }
    }
    return i + 1; 
  
  // for( let i = 0; i < nums.length; i++){
  //     if(nums[i] == nums[i + 1]){
  //       nums.splice(i+1,1)
  //       i--
  //     }
  //   }
};