function fibs(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    i < 2 ? arr.push(i) : arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
}

fibs(8);

function fibsRec(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

console.log(fibsRec(8));
