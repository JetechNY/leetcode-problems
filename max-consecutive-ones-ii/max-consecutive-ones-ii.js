/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
 //Sliding Window (expands and contracts array to only allow for max 1 zero)
 let max = 0
 let leftpt = 0
 let rightpt = 0
 let numzero = 0
 
 while ( rightpt < nums.length){
   if( nums[rightpt] == 0) numzero++   
   while (numzero == 2){
     if( nums[leftpt] == 0){
       numzero--
     }
     leftpt++
    }
  max = Math.max(max, rightpt-leftpt +1)
  rightpt++ 
    }
  return max
};

// Brute force (ends up checking every possible combo)
  // let peakindex = {}  
  // max = 0
  // for(let i = 0; i < nums.length; i++){
  //       let numsZ = 0
  //       for(let j = i; j < nums.length; j++){
  //         if(nums[j]==0){
  //           numsZ ++
  //         }
  //         if(numsZ <= 1) {
  //         max = Math.max( max, j - i + 1)
  //       }    
  //       }
  //   }return max 
