/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];

    let hashmap = {};
 
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if( hashmap[diff] !== undefined) return [i, hashmap[diff]];
        else hashmap[nums[i]] = i;
    }
}

