const solution = (n) => {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let compositeNumber = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        compositeNumber++;
      }
    }

    if (compositeNumber >= 3) {
      count++;
    }
  }

  return count;
};