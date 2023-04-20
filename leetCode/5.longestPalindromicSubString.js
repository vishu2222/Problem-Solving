var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  let max = 0;
  let palindromeStr = "";
  let subStr;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      subStr = s.slice(i, j + 1);
      console.log(subStr, "i", i, "j", j);
      if (isPalindrome(subStr) && subStr.length > max) {
        max = subStr.length;
        palindromeStr = subStr;
      }
    }
  }

  return palindromeStr;
};

function isPalindrome(str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const s = "bb";

console.log(longestPalindrome(s));
