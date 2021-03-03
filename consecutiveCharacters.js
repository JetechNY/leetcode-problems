// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.

 
// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:

// Input: s = "triplepillooooow"
// Output: 5
// Example 4:

// Input: s = "hooraaaaaaaaaaay"
// Output: 11
// Example 5:

// Input: s = "tourist"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 500
// s contains only lowercase English letters.

// Solution:

var consecutiveCharacters = function(s) {
   if (!s.length) return 0;//checking for edge case if constraints werent in place
    let count = 1,//since length is at least 1, setting count and max to 1 is ok. 
         max = 1
  for (let i = 1; i < s.length; i++) { //starting at index 1 not 0. Allows me to look at previous instead of next.
    if( s[i] == s[i-1]) { //compares current to previous value, if they are the same
     max = Math.max(max, ++count) //increase count and compare to max, then set the bigger number to max
    }
    else{
      count = 1 //if previous val is not the same as current, or no repeat, then reset count to 1
    }
  }
  return max //return the max

}


// also works

var maxPower = function(s) {
    let count = 1,
         max = 1,
        previous = ' '//setting previous as empty string
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i)//c is set to the string char at i
    if( c == previous) {// is current c the same as previous?
      ++count//increase count if true
    }else{
      count = 1//otherwise reset count to 1
      previous = c //set the previous to current
    }
    max = Math.max(max, count)//set max to the greater of the two, this always runs inside for loop
  }
  return max// when for loop complete, return max
}
