function romanToInt(s) {
  const lookupTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let str = new String(s)
  let p1 = 0
  let p2 = 1
  let decimalEquivalentNumber = 0

  while (p2 < s.length) {
    const currentChar = str[p1]
    const nextChar = str[p2]

    if (lookupTable[currentChar] >= lookupTable[nextChar]) {
      decimalEquivalentNumber = decimalEquivalentNumber + lookupTable[currentChar]

      if (p2 === s.length - 1) decimalEquivalentNumber = decimalEquivalentNumber + lookupTable[nextChar]

      p1 += 1
      p2 += 1
    } else {
      decimalEquivalentNumber = decimalEquivalentNumber + getNumberFromRoman(currentChar, nextChar, lookupTable)

      p1 += 2
      p2 += 2

      if (p1 === s.length - 1) decimalEquivalentNumber = decimalEquivalentNumber + lookupTable[str[p1]]
    }
  }

  return decimalEquivalentNumber

  function getNumberFromRoman(currentChar, nextChar, lookupTable) {
    return lookupTable[nextChar] - lookupTable[currentChar]
  }
}

const s = "D" // expected 1695
console.log(romanToInt(s))
