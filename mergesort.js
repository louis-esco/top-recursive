function mergeSort(arr) {
  let halfArr = Math.floor(arr.length / 2);
  if (halfArr < 1) return arr;

  const leftArr = mergeSort(arr.slice(0, halfArr));
  const rightArr = mergeSort(arr.slice(halfArr, arr.length));

  let sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < leftArr.length || j < rightArr.length) {
    if (leftArr[i] < rightArr[j] || j >= rightArr.length) {
      sortedArr.push(leftArr[i]);
      i++;
    } else {
      sortedArr.push(rightArr[j]);
      j++;
    }
  }

  return sortedArr;
}

console.log(mergeSort([7, 5, 4, 3, 3]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(
  mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 7, 5, 4, 3, 3, 105, 79, 100, 110])
);
