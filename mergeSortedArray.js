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

// Approach 2 : Three Pointers (Start From the Beginning)
// Intuition

// Because each array is already sorted, we can achieve an \mathcal{O}(n + m)O(n+m) time complexity with the help of the two-pointer technique.

// Algorithm

// The simplest implementation would be to make a copy of the values in nums1, called nums1Copy, and then use two read pointers and one write pointer to read values from nums1Copy and nums2 and write them into nums1.

// Initialize nums1Copy to be a new array containing the first m values of nums1.
// Initialize read pointer p1 to the beginning of nums1Copy.
// Initialize read pointer p2 to the beginning of nums2.
// Initialize write pointer p to the beginning of nums1.
// While p is still within nums1:
// If nums1Copy[p1] exists and is less than or equal to nums2[p2]:
// Write nums1Copy[p1] into nums1[p], and increment p1 by 1.
// Else
// Write nums2[p2] into nums1[p], and increment p2 by 1.
// Increment p by 1.

// class Solution {
//     public void merge(int[] nums1, int m, int[] nums2, int n) {
//         // Make a copy of the first m elements of nums1.
//         int[] nums1Copy = new int[m];
//         for (int i = 0; i < m; i++) {
//             nums1Copy[i] = nums1[i];
//         }

//         // Read pointers for nums1Copy and nums2 respectively.
//         int p1 = 0;
//         int p2 = 0;
                
//         // Compare elements from nums1Copy and nums2 and write the smallest to nums1.
//         for (int p = 0; p < m + n; p++) {
//             // We also need to ensure that p1 and p2 aren't over the boundaries
//             // of their respective arrays.
//             if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//                 nums1[p] = nums1Copy[p1++];
//             } else {
//                 nums1[p] = nums2[p2++];
//             }
//         }
//     }
// }

// Complexity Analysis

// Time complexity : \mathcal{O}(n + m)O(n+m).

// We are performing n + 2 \cdot mn+2⋅m reads and n + 2 \cdot mn+2⋅m writes. Because constants are ignored in Big O notation, this gives us a time complexity of \mathcal{O}(n + m)O(n+m).

// Space complexity : \mathcal{O}(m)O(m).

// We are allocating an additional array of length mm.

// Most programming languages have a built-in sorting algorithm that uses \mathcal{O}(n)O(n) space.

var merge = function(nums1, m, nums2, n) {
 
let p1 = m-1//pointer 1 start at end of m
let p2 = n-1//pointer 2 start at end of n

for(let p = m + n - 1; p >= 0; p--){//pointer 3 start at total length (minus 1 for index 0) aka end of list, and move left after each iteration
  if(p2 < 0){ //stop if we complete 2nd pointer values
    break
  }
  if(p1 >= 0 && nums1[p1] > nums2[p2]){ // if ( we run out of 1st pointer vals and val of nums at p1 is greater than nums2 at p2)
    nums1[p] = nums1[p1--] //replace value of nums1 at p(pointer 3) with nums1[p1] then reduce p1 value
  }else{
    nums1[p] = nums2[p2--]// replace value of nums1 at p(pointer 3, end of list) with nums2[p2] then reduce p2 value
  }
 }
};

// Complexity Analysis

// Time complexity : \mathcal{O}(n + m)O(n+m).

// Same as Approach 2.

// Space complexity : \mathcal{O}(1)O(1).

// Unlike Approach 2, we're not using an extra array.
// So, what if instead we start to overwrite nums1 from the end, where there is no information yet?

// The algorithm is similar to before, except this time we set p1 to point at index m - 1 of nums1, p2 to point at index n - 1 of nums2, and p to point at index m + n - 1 of nums1. This way, it is guaranteed that once we start overwriting the first m values in nums1, we will have already written each into its new position. In this way, we can eliminate the additional space.
