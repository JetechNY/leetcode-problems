// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104

var validMountainArray = function(arr) {
  let i = 0
  while( i < arr.length && i + 1 < arr.length && arr[i] < arr[i+1]){
        i++
        }
  if( i = 0 || i + 1 >= arr.length) {
  return false
  }
  while( i < arr.length && i + 1 < arr.length){
    if( arr[i] <= arr[i++ + 1]){
       return false
       }
    }
return true
       }


var validMountainArray = function(arr) {
    if (arr.length >= 3) {// is array leng greater than 3? if true continue, if not return false
        let peak = Math.max(...arr)//find peak val of arr
        let index = arr.indexOf(peak)//find index of peak val
        if (index === 0 || index === arr.length - 1) {//if peak index is the start or end of array, return false 
            return false
        }
        for (let i = 1; i < arr.length; i++) {//iterate thru array
            if (i <= index) {//if element is less than or equal to peak index
                if(arr[i] <= arr[i-1]) {//and if next ele is smaller than prev ele, return false
                    return false//aka if while going up the next number is smaller, fail out
                }
            } else {//if element is more than peak index
                if(arr[i] >= arr[i-1]) {//if the numbers are going up again, return false
                   return false
                }
            }
        }
        return true //if array is completely iterated thru and finished, you have a mountain array!
    } else {
        return false//return false if arr.length is under 3
    }
};

// Approach 1: One Pass
// Intuition

// If we walk along the mountain from left to right, we have to move strictly up, then strictly down.

// Algorithm

// Let's walk up from left to right until we can't: that has to be the peak. 
// We should ensure the peak is not the first or last element. 
// Then, we walk down. If we reach the end, the array is valid, otherwise its not.

var validMountainArray = function(arr) {
    let n = arr.length
    let i = 0
    
    while( i+1 < n && arr[i] < arr[i+1])
      i++;
  
  if (i == 0 || i == n - 1)
    return false
  
  while(i+1< n && arr[i] > arr[i+1])
    i++
  return i == n-1
};
