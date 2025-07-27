function insertionSort() {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}

module.exports = insertionSort;
