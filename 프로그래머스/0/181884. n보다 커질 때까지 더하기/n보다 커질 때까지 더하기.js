const solution = (numbers, n) => {
  return numbers.reduce((sum, item) => {
    return sum > n ? sum : sum + item;
  });
};