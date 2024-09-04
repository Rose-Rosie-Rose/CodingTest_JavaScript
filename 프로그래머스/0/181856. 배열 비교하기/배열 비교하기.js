const solution = (arr1, arr2) => {
  if (arr1.length < arr2.length) {
    return -1;
  } else if (arr1.length > arr2.length) {
    return 1;
  } else {
    const arr1Sum = arr1.reduce((arr, cur) => arr + cur, 0);
    const arr2Sum = arr2.reduce((arr, cur) => arr + cur, 0);

    return arr1Sum < arr2Sum ? -1 : arr1Sum > arr2Sum ? 1 : 0;
  }
};