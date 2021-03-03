// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109

// Solution:

// var merge = function(nums1, m, nums2, n) {
 
//         for (let i = 0; i < n; i++) {
//             nums1[i + m] = nums2[i];
//         }
//         nums1.sort((a,b) => a-b);
//   };

// Time complexity : \mathcal{O}((n + m)\log(n + m))O((n+m)log(n+m)).

// The cost of sorting a list of length xx using a built-in sorting algorithm is \mathcal{O}(x \log x)O(xlogx). Because in this case we're sorting a list of length m + nm+n, we get a total time complexity of \mathcal{O}((n + m) \log (n + m))O((n+m)log(n+m)).

// Space complexity : \mathcal{O}(n)O(n), but it can vary.

// Most programming languages have a built-in sorting algorithm that uses \mathcal{O}(n)O(n) space.

var merge = function(nums1, m, nums2, n) {
 
let p1 = m-1
let p2 = n-1

for(let p = m+n-1; p >= 0; p--){
  if(p2 < 0){
    break
  }
  if(p1 > = 0 && nums1[p1] > nums2[p2]){
    nums1[p] = nums1[p1--]
  }else{
    nums1[p] = nums2[p2--]
  }
 }
};

// Complexity Analysis

// Time complexity : \mathcal{O}(n + m)O(n+m).

// Same as Approach 2.

// Space complexity : \mathcal{O}(1)O(1).

// Unlike Approach 2, we're not using an extra array.
