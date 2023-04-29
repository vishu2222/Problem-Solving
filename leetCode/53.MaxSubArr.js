/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let pointer1 = 0;
  let pointer2 = 1;
  let sum = nums[pointer1];
  let max = nums[0];
  let subArrBounds = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[pointer2];

    if (sum > nums[pointer2]) {
      pointer2 = pointer2 + 1;
    } else {
      pointer1 = pointer2;
      pointer2 = pointer2 + 1;
      sum = nums[pointer1];
    }

    if (max < sum) {
      max = sum;
      subArrBounds = [pointer1, pointer2];
    }
  }

  return max;
};
