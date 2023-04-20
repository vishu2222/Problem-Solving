var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArr.push(nums1[i]);
      i++;
    } else {
      mergedArr.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    mergedArr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    mergedArr.push(nums2[j]);
    j++;
  }

  //   console.log(mergedArr);

  if (mergedArr.length % 2 === 0) {
    return (mergedArr[Math.trunc(mergedArr.length / 2)] + mergedArr[Math.trunc(mergedArr.length / 2) - 1]) / 2;
  }

  if (mergedArr.length % 2 !== 0) {
    return mergedArr[Math.trunc(mergedArr.length / 2)];
  }
};

const nums1 = [5, 6, 7, 8, 10];
const nums2 = [4, 9, 11, 20, 25];

console.log(findMedianSortedArrays(nums1, nums2));
