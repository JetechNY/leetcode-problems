// Check If N and Its Double Exist

// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
// Example 2:

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
// Example 3:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.
 

// Constraints:

// 2 <= arr.length <= 500
// -10^3 <= arr[i] <= 10^3

// Brute Force , 2 loops

// var checkIfExist = function(arr) {
//   for(let i = 0; i < arr.length; i++){
//     for( let j = 0; j < i; j++){
//       if(arr[i] == arr[j] *2 || arr[i] == arr[j]/2 ){
//          return true
//          }
//     }
//   }return false
// };


Hash Table
We could use a for loop nested in a for loop to check for each element if there is a corresponding number that is its double.

But even though we would have a constant space complexity of O(1), we would have a quadratic time complexity of O(n²) which is not good and should be avoided if possible.

Another possible solution is to use the Hash Table data structure that in JavaScript can be represented as an object. Its main advantage is that we can assume that it takes constant time of O(1) to retrieve each stored element, so it is fast.

It also allows us to solve this problem by traversing the array only once:

In each iteration of a for statement we check if the current value already exists as a key in our object.

If so, a number and its double exist in the array, we must return true.
If not, store key/value pairs where one pair has the current element divided by 2 as a key and the other pair has the current element multiplied by 2 as a key. Notice that the values we store with each key do not matter, since we only check the keys.
If the for loop ends without finding a match, it means that the array does not contain a number and its double, we must return false.

Since we created a Hash Table with a size that scales linearly according to the size of our input array, it has a linear space complexity of O(n).

This time we only traverse the array once, so it has a linear time complexity of O(n).

var checkIfExist = function(arr) {
    const hashTable = {};
    
    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];
      
      if(hashTable[currValue] !== undefined) {
        return true
      }
      hashTable[currValue / 2] = currValue;
      hashTable[currValue * 2] = currValue;
    }
  
  return false;
};
Map
This Hash Table approach could also be implemented by using the JavaScript built in Map data collection.

The main difference in our use case would be that instead of storing each key in the Hash Table as a string, we would store each key in a Map as a number. An Object only supports string and symbol as a key, but a Map supports objects and any primitive type as keys.

Set
The problem with using a Hash Table (object) or Map is that when we insert a key/value pair, the key is required but its value is not.
When we need a Hash Table data structure's properties to solve the problem, but we only need keys instead of key/value pairs it makes sense to use a Set data collection.
NOTE: Keep in mind that a JavaScript built in Set only stores unique values.

Similar to an object and a Map, we can assume that we can retrieve a value from a Set with a constant time complexity of O(1).

We created a Set with a size that scales linearly according to the size of our input array, it has a linear space complexity of O(n).

Just like our previous solution we only traverse the array once, so it has a linear time complexity of O(n).

var checkIfExist = function(arr) {
    const set = new Set();
    
    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];
      
      if(set.has(currValue)) {
        return true
      }
      set.add(currValue / 2);
      set.add(currValue * 2);
    }
  
  return false;
};


or

var checkIfExist = function(array) {
  while (array.length) { // While the array has items
    const n = array.pop() // Get an item and remove it from the array
	 // If the double or the half is found stop looking
    if (array.includes(n*2) || array.includes(n/2)) return true
  }
  return false // If we get here we've gone through the whole array without finding a match
}
This solution takes advantage of the fact that we shorten the array everytime we look for a double, so the next check goes faster the more items we've checked.

