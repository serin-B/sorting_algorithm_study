import { swapElement } from "../utils/swap.js";

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let nonSwap = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swapElement(array, j, j + 1);
        nonSwap = false;
      }
    }
    if (nonSwap) return array;
  }
  return array;
}

function bubbleSortBefore(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swapElement(array, j, j + 1);
      }
    }
  }
  return array;
}
