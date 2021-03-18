// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 
// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

// Approach: In-Place
// Intuition

// If we want to do the sort in-place, we can use quicksort, a standard textbook algorithm.

// Algorithm

// We'll maintain two pointers i and j. The loop invariant is everything below i has parity 0 (ie. A[k] % 2 == 0 when k < i), and everything above j has parity 1.

// Then, there are 4 cases for (A[i] % 2, A[j] % 2):

// If it is (0, 1), then everything is correct: i++ and j--.

// If it is (1, 0), we swap them so they are correct, then continue.

// If it is (0, 0), only the i place is correct, so we i++ and continue.

// If it is (1, 1), only the j place is correct, so we j-- and continue.

// Throughout all 4 cases, the loop invariant is maintained, and j-i is getting smaller. So eventually we will be done with the array sorted as desired.

class Solution {
    public int[] sortArrayByParity(int[] A) {
        int i = 0, j = A.length - 1;
        while (i < j) {
            if (A[i] % 2 > A[j] % 2) {
                int tmp = A[i];
                A[i] = A[j];
                A[j] = tmp;
            }

            if (A[i] % 2 == 0) i++;
            if (A[j] % 2 == 1) j--;
        }

        return A;
    }
}

// Complexity Analysis

// Time Complexity: O(N)O(N), where NN is the length of A. Each step of the while loop makes j-i decrease by at least one. (Note that while quicksort is O(N \log N)O(NlogN) normally, this is O(N)O(N) because we only need one pass to sort the elements.)

// Space Complexity: O(1)O(1) in additional space complexity.


// Approach: Two Pass
// Intuition and Algorithm

// Write all the even elements first, then write all the odd elements.

class Solution {
    public int[] sortArrayByParity(int[] A) {
        int[] ans = new int[A.length];
        int t = 0;

        for (int i = 0; i < A.length; ++i)
            if (A[i] % 2 == 0)
                ans[t++] = A[i];

        for (int i = 0; i < A.length; ++i)
            if (A[i] % 2 == 1)
                ans[t++] = A[i];

        return ans;
    }
}

// Complexity Analysis

// Time Complexity: O(N)O(N), where NN is the length of A.

// Space Complexity: O(N)O(N), the space used by the answer.

// Approach : Sort
// Intuition and Algorithm

// Use a custom comparator when sorting, to sort by parity.

class Solution {
    public int[] sortArrayByParity(int[] A) {
        Integer[] B = new Integer[A.length];
        for (int t = 0; t < A.length; ++t)
            B[t] = A[t];

        Arrays.sort(B, (a, b) -> Integer.compare(a%2, b%2));

        for (int t = 0; t < A.length; ++t)
            A[t] = B[t];
        return A;

        /* Alternative:
        return Arrays.stream(A)
                     .boxed()
                     .sorted((a, b) -> Integer.compare(a%2, b%2))
                     .mapToInt(i -> i)
                     .toArray();
        */
    }
}

// Complexity Analysis

// Time Complexity: O(N \log N)O(NlogN), where NN is the length of A.

// Space Complexity: O(N)O(N) for the sort, depending on the built-in implementation of sort.

//another solution

var sortArrayByParity = function(A) {
    let start = 0
    let end = A.length -1
    let result = []
    for (i in A){
      if(A[i] % 2 == 0){
        result[start] = A[i]
        start++
      }else{
        result[end] = A[i]
        end--
      }
    }
    return result
  
};


//Case.1

var sortArrayByParity = function(A) {
    const temp = [];
    A.forEach(v => {
        v % 2 === 0 ? temp.unshift(v) : temp.push(v);
    })
    
    return temp;
};
//Case.2

var sortArrayByParity = function(A) {
    return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
};
//
const sortArrayByParity = (A) => {
  for (let i = 0, j = -1, arrLen = A.length; i < arrLen; i++) {
    if ((A[i] & 1) === 0 && j >= 0) { [A[i], A[j++]] = [A[j], A[i]]; }
    else if (A[i] & 1) { j = j === -1 ? i : j; }
  }
  return A;
};

//
var sortArrayByParity = function(A) {
  let i = 0;
  let j = A.length -1;

  while(i < j) {
    if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }

    if (A[i] % 2 !== 0) {
      j--;
    }

    if(A[i] % 2 === 0) {
      i++;
    }
  }

  return A;
};

