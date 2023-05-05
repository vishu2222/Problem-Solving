// fib sequence
//  n     = 1 2 3 4 5 6 7  8  9
// fib(n) = 1 1 2 3 5 8 13 21 34

function fib1(n) {
  let a = 1
  let b = 1
  let temp
  if (n < 3) return 1
  for (let i = 3; i <= n; i++) {
    temp = a + b
    a = b
    b = temp
  }
  return temp
}

// t~O(N)
// s~O(1)

// Recursion
function fib2(n) {
  if (n < 3) return 1
  return fib2(n - 2) + fib2(n - 1)
}

// t ~ O(2^n)
// s ~ O(n)

// Recursion with memoization

function fib3(n, memo = {}) {
  if (n in memo) return memo[n]
  if (n < 3) return 1
  memo[n] = fib3(n - 2, memo) + fib3(n - 1, memo)
  return memo[n]
}

// t ~ O(n)
// s ~ O(n)

const n = 40
console.log(fib3(n))
// console.log(fib1(n))
// console.log(fib2(n))
