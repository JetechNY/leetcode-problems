// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 

// Note:

// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9

// Solution:

// var duplicateZeros = function(arr) {
//     if (arr == null || arr.length == 0) return;
//     for(let i = 0; i < arr.length; i++){
//       if (arr[i] == 0){
//         for(let j = arr.length -1; j>i ; j--){
//           arr[j] = arr[j-1]
//         }
//         i++
//       }
//     }
//   };

// O(n**2) is very bad

var duplicateZeros = function(arr) {
    if (arr == null || arr.length == 0) return;//edge case check if arr exists or empty
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {//looking for 0's
            arr.splice(i + 1, 0, 0);//splice inserts 0 (last arg) at index i+1(first arg), removing 0 items(second arg)
            arr.pop();//pop removes last item in array
            i ++;//skip over the 0 that was just added or you would get 0's forever
        }
    }
    
  };

