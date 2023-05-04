//

var maxProfit = function (prices) {
  let minStockVal = prices[0]
  let maxProfit = -Infinity
  let profit

  for (let i = 1; i < prices.length; i++) {
    profit = prices[i] - minStockVal

    if (profit > maxProfit) {
      maxProfit = profit
    }

    if (prices[i] < minStockVal) {
      minStockVal = prices[i]
    }
  }

  if (maxProfit < 0) return 0

  return maxProfit
}

const prices = [2, 1, 2, 1, 0, 1, 2]
// const prices = [1, 5, 3, 6, 4]
console.log(maxProfit(prices))
// const prices = [1, 5, 3, 6, 4]
