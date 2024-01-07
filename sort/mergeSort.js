function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const [left, right] = splitInHalf(array);
  return merge(mergeSort(left), mergeSort(right));
}

function splitInHalf(array) {
  const half = Math.round(array.length / 2);
  return [array.slice(0, half), array.slice(half)];
}

function merge(left, right) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  for (let i = 0; i < left.length + right.length; i++) {
    if (
      (left[leftIdx] <= right[rightIdx] && leftIdx < left.length) ||
      rightIdx === right.length
    ) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else if (rightIdx < right.length || leftIdx === left.length) {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return result;
}

console.log(mergeSort([6, 3, 2, 8, 1]));
