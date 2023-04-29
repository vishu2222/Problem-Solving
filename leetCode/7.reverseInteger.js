var reverse = function (x) {
  let stringX = x.toLocaleString("fullwide", { useGrouping: false });
  let sign;
  if (stringX[0] === "-" || stringX[0] === "+") {
    sign = stringX[0];
    stringX = stringX.slice(1);
  }

  let reverseString = "";
  for (let i of stringX) {
    reverseString = i + reverseString;
  }

  if (sign) {
    reverseString = sign + reverseString;
  }

  const reversedNumber = Number(reverseString);
  if (reversedNumber > 2e31 - 1 || reversedNumber < -2e31) return 0;
  return reversedNumber;
};

const input = 1534236469;
// console.log("input", input);
// console.log("output", reverse(input));

const number = 1534236469;
const binaryString = number.toString(2);
const numBits = binaryString.length;
console.log("numBits", numBits);
