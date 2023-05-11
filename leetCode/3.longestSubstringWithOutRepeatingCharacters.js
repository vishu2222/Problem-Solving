function longestSubStr(str) {
  let maxLength = 0
  let windowStart = 0
  let windowEnd = 0
  const currentSubStringChars = {}

  // abcde
  while (windowEnd !== str.length) {
    const currentChar = str[windowEnd]

    if (currentSubStringChars[currentChar] === undefined) {
      currentSubStringChars[currentChar] = true
      windowEnd++
      const windowSize = windowEnd - windowStart
      maxLength = Math.max(maxLength, windowSize)
    } else {
      let startChar = str[windowStart]
      delete currentSubStringChars[startChar]
      windowStart++
    }
  }

  return maxLength
}

const str = "abcdbef"
console.log(longestSubStr(str))
