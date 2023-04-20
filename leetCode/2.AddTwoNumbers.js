var addTwoNumbers = function (l1, l2) {
  //
  const l3 = [];
  if (l1.length > l2.length) {
    for (let i = l2.length; i < l1.length; i++) {
      l2[i] = 0;
    }
  }

  if (l2.length > l1.length) {
    for (let i = l1.length; i < l2.length; i++) {
      l1[i] = 0;
    }
  }

  let sum;
  for (let i = 0; i < l1.length; i++) {
    if (l3[i]) {
      sum = l1[i] + l2[i] + l3[i];
    } else {
      sum = l1[i] + l2[i];
    }

    if (sum < 10 && l3[i] === undefined) {
      l3[i] = l2[i] + l1[i];
    } else if (sum < 10 && l3[i]) {
      l3[i] = l2[i] + l1[i] + l3[i];
    } else if (sum >= 10) {
      let splitedNum = String(sum).split("");
      l3[i] = Number(splitedNum[1]);
      l3[i + 1] = Number(splitedNum[0]);
    }
  }
  return l3;
};

const l1 = [9, 9, 9, 9, 9, 9, 9];
const l2 = [9, 9, 9, 9];

console.log(addTwoNumbers(l1, l2));
