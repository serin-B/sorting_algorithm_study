export const swapElement = (array, idx1, idx2) => {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

const swapElement2 = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};
