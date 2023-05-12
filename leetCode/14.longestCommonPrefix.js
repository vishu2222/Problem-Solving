var longestCommonPrefix = function (arr) {
  let result = ""
  let currentPrefixElement = arr[0][0]
  let stringIndex = 0

  while (currentPrefixElement !== undefined) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][stringIndex] !== currentPrefixElement) {
        return result
      }
    }

    result = result + currentPrefixElement

    stringIndex = stringIndex + 1
    currentPrefixElement = arr[0][stringIndex]
  }
  return result
}

const strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))
