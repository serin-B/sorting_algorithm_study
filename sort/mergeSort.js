function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
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
