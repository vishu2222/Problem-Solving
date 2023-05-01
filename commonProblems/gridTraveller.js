// Ref: FCC Dynamic programming
//
// number of ways to travall from m,n(start) to 0,0(end) on an m*n grid where in each move we are allowed to move 1 unit right or down

function gridTravell(m, n, memo = {}) {
  const key = m + "," + n
  if (key in memo) return memo[key]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  memo[key] = gridTravell(m - 1, n, memo) + gridTravell(m, n - 1, memo)
  return memo[key]
}

console.log(gridTravell(18, 18))
