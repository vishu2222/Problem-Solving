// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.



var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const number = target - nums[i]
        if (nums.includes(number)) {
            let j = 1 + i + nums.slice(i + 1, nums.length).indexOf(number);
            if (i !== j) {
                return [i, j]
            }
        }
    }
};

const nums = [3, 2, 4]
const target = 6
console.log(twoSum(nums, target))