function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curValue = array[i];
    for (let j = i - 1; j >= 0 && arr[j] > curValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curValue;
  }
}
