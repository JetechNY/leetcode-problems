Algorithm Practice: Two Sum
Today we are going to go over how to solve an easy algorithm problem used by many companies for technical interviews called Two Sum. 
The problem is as follows:
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

---

Solutions
Approach 1: Brute Force
The brute force approach is simple. Loop through each element i and find if there is another value j that when added to i equals to target
var twoSum = function(nums, target) {      
  for(let i = 0 ; i< nums.length ; i++){          
    for(let j = i + 1; j <nums.length; j++){              
      if( nums[i] + nums[j] == target){                  
      return [i,j]              
      }          
    }
  }    
};
Complexity Analysis
Time complexity : O(n²). 

For each element, we try to find its complement by looping through the rest of array which takes O(n) time. Therefore, the time complexity is O(n²).
Space complexity : O(1).

Approach 2: Single optimized loop
Single loop. Find complementary number and check if it exists in array
var twoSum = function(nums, target) {      
  for(let i = 0 ; i< nums.length ; i++){           
    let comp = (target - nums[i])           
    if (nums.indexOf(comp, i + 1) !== -1){                
      return [i, nums.indexOf(comp, i + 1)]           
    }
  }
};
Complexity Analysis
Time complexity : O(n).

We traverse the list containing n elements once.
Space complexity : O(1).

Approach 3: One-pass Hash Table
A better, more efficient way to check if the complement exists in the array, is a hash table. We do this by finding if the complement exists in the hash map. if not map the element in the array to its index.
This way we can reduce the look up time from O(n) to O(1) by trading space for speed. 
var twoSum = function(nums, target) {
    const len = nums.length;
    let hashmap = {};
    for(let i = 0; i < len; i++) {
        let diff = target - nums[i];
        let find = hashmap[diff];
        if(find !== undefined) return [find, i];
        else hashmap[nums[i]] = i;
    }
};
Complexity Analysis:
Time complexity : O(n). We traverse the list containing n elements only once. Each look up in the table costs only O(1) time.
Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most n elements.
