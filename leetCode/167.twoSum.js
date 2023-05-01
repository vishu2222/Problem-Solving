// 2 pointers
//

var twoSum = function (numbers, target) {
  let p1 = 0
  let p2 = numbers.length - 1
  let sum
  while (true) {
    sum = numbers[p1] + numbers[p2]
    if (sum === target) return [p1, p2]
    if (sum > target) p2 -= 1
    if (sum < target) p1 += 1
  }
}

const numbers = [2, 7, 11, 15]
const target = 9

console.log(twoSum(numbers, target))
