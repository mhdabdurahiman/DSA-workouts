const bubbleSort = function (arr) {
  const n = arr.length;
  let swapNum;
  do {
    swapNum = 0;
    for (let i = 0; i < n - 1; i++) {
      let temp;
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapNum += 1;
      }
    }
  } while (swapNum !== 0); 
  return arr 
};

console.log(bubbleSort([-3, 6, -1, 8, 3, 2, -10]));
