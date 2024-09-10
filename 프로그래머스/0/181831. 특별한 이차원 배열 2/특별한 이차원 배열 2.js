const solution = (arr) => {
  const isSymmetric = arr.every((row, i) =>
    row.every((_, j) => arr[i][j] === arr[j][i])
  );
  return isSymmetric ? 1 : 0;
};