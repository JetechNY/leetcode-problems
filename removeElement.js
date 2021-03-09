// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3]
// Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
 

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

var removeElement = function(nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[index] = nums[i];
			index++;
		}
	}
	return index; //which is just a caount of how many items dont match val
};

/* for each items in the given array, check if the item is not equivalent to the val to the removed
	 * if yes, then copy that value to the index which we are having as a pointer
	 * and then increment the index by 1
	 * finally return the index which should hold the number of items in the given array which is not === val
	*/


const removeElement = function(nums, val) {
  	for (let i = 0; i < nums.length; i ++) {
    	if (nums[i] === val) {
      	    nums.splice(i, 1);//removes 1 element at i
            i--;
        }
    }
    
	return nums.length;
};

// or

const removeElement = (nums, val)=> {
    
    let counter = 0 
    
    // for(let j of nums ){
    //     if(j !== val){
    //         nums[counter++] = j
    //     }
    // }
    nums.forEach(j => j !== val ? nums[counter++] = j : "");
    
    return counter
    
};



Approach 1: Two Pointers
Intuition

Since this question is asking us to remove all elements of the given value in-place, we have to handle it with O(1)O(1) extra space. How to solve it? We can keep two pointers ii and jj, where ii is the slow-runner while jj is the fast-runner.

Algorithm

When nums[j]nums[j] equals to the given value, skip this element by incrementing jj. As long as nums[j] \neq valnums[j] 

​	
 =val, we copy nums[j]nums[j] to nums[i]nums[i] and increment both indexes at the same time. Repeat the process until jj reaches the end of the array and the new length is ii.

public int removeElement(int[] nums, int val) {
    int i = 0;
    for (int j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}

Complexity analysis

Time complexity : O(n)O(n). Assume the array has a total of nn elements, both ii and jj traverse at most 2n2n steps.

Space complexity : O(1)O(1).


Approach 2: Two Pointers - when elements to remove are rare
Intuition

Now consider cases where the array contains few elements to remove. For example, nums = [1,2,3,5,4], val = 4nums=[1,2,3,5,4],val=4. The previous algorithm will do unnecessary copy operation of the first four elements. Another example is nums = [4,1,2,3,5], val = 4nums=[4,1,2,3,5],val=4. It seems unnecessary to move elements [1,2,3,5][1,2,3,5] one step left as the problem description mentions that the order of elements could be changed.

Algorithm

When we encounter nums[i] = valnums[i]=val, we can swap the current element out with the last element and dispose the last one. This essentially reduces the array's size by 1.

Note that the last element that was swapped in could be the value you want to remove itself. But don't worry, in the next iteration we will still check this element.

public int removeElement(int[] nums, int val) {
    int i = 0;
    int n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
}

Complexity analysis

Time complexity : O(n)O(n). Both ii and nn traverse at most nn steps. In this approach, the number of assignment operations is equal to the number of elements to remove. So it is more efficient if elements to remove are rare.

Space complexity : O(1)O(1).
