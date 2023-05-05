var containsDuplicate = function (nums) {
  let obj = {}
  for (const num of nums) {
    if (obj[num] !== undefined) return true
    obj[num] = num
  }
  return false
}

const nums = [1, 2, 3, 4]
console.log(containsDuplicate(nums))
