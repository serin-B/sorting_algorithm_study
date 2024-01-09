function radixSort(array) {
  const max = maxDigits(array);

  for (let k = 0; k < max; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      digitBuckets[getDigit(array[i], k)].push(array[i]);
    }
    array = [].concat(...digitBuckets);
  }

  return array;
}

function getDigit(number, index) {
  return Math.floor(Math.abs(number) / Math.pow(10, index)) % 10;
}

function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function maxDigits(array) {
  return Math.max(...array.map((num) => digitCount(num)));
}
