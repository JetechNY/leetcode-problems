Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

----

Solution 1: Brute Force

The brute force approach is simple. Loop through each element i and find if there is another value j that when added to i equals to target .

Complexity Analysis

Time complexity : O(N^2). 
For each element, we try to find its complement by looping through the rest of array which takes O(n) time. Therefore, the time complexity is O(N^2).

Space complexity : O(1).

var twoSum = function(nums, target) {
      for(let i = 0 ; i< nums.length ; i++){
          for(let j = i + 1; j <nums.length; j++){
              if( nums[i] + nums[j] == target){
                  return [i,j]
              }
          }
      }    
};

Solution 2: Optimized loop

Single loop. Find complementary number, checks if it exists in array

Complexity Analysis:

Time complexity : O(N). We traverse the list containing n elements once. 

Space complexity : O(1). 

var twoSum = function(nums, target) {
      for(let i = 0 ; i< nums.length ; i++){
           let comp = (target - nums[i])
           if (nums.indexOf(comp, i + 1) !== -1){
                return [i, nums.indexOf(comp, i + 1)]
           }    
      }    
};

Solution 3:  Hash Map

While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table. If it exists, we have found a solution and return immediately.

Complexity Analysis:

Time complexity : O(N). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.

Space complexity : O(N). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.

var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let hashmap = {};
    for(let i = 0; i < len; i++) {
        let diff = target - nums[i];
        let find = hashmap[diff];
        if(find !== undefined) return [find, i];
        else hashmap[nums[i]] = i;
    }
};
