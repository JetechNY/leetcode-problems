
// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

// Solution:

var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let max = 0
    for( let i = 0 ; i < nums.length ; i++)
        if(nums[i] == 1) {
          count++
        } 
        else {
          max = Math.max(count, max)
          count = 0
        } 
    return Math.max(count, max)
};

// or

    let max = 0, curr = 0;
    for (let num of nums){
        if (num == 1){
            curr++;
        }
        else{
            if (curr > max) max = curr;
            curr = 0;
        }
    }
    if (curr > max) max = curr;
    return max;
};

// alternative 1 line

var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join('').split('0').map(x => x.length))
};
