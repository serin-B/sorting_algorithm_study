import { swapElement } from "../utils/swap.js";

function quickSort(array, leftIdx = 0, rightIdx = array.length - 1) {
  if (leftIdx < rightIdx) {
    let pivotIdx = pivot(array, leftIdx, rightIdx);
    quickSort(array, leftIdx, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, rightIdx);
  }

  return array;
}

function pivot(array, startIdx = 0, endIdx = array.length - 1) {
  const pivot = array[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i <= endIdx; i++) {
    if (array[i] < pivot) {
      swapIdx++;
      swapElement(array, swapIdx, i);
    }
  }

  swapElement(array, startIdx, swapIdx);
  return swapIdx;
}
