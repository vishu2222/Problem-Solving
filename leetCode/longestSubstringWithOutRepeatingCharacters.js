var lengthOfLongestSubstring = function (s) {
  let max = 0;

  for (let pos = 0; pos < s.length; pos++) {
    let minSubString = [];
    for (let i = pos; i < s.length; i++) {
      if (!minSubString.includes(s[i])) {
        minSubString.push(s[i]);
        // console.log("minSubString", minSubString);
        if (i === s.length - 1) {
          if (max < minSubString.length) max = minSubString.length;
          //   console.log("max=", max);
          minSubString = [];
          break;
        }
      } else {
        if (max < minSubString.length) max = minSubString.length;
        // console.log("max=", max);
        minSubString = [];
        break;
      }
    }
  }
  return max;
};

let s = "abcdabcabcdef";
console.log(lengthOfLongestSubstring(s));
