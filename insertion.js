// Key: Use current to store the value need to be moved,
// and use pointer j to find from right to left
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //control point i, must go through all the elements in the array
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; //keep rewrite number
      j--; //move to left
    }
    arr[j + 1] = current;
  }
  return arr;
}

module.exports = insertionSort;
