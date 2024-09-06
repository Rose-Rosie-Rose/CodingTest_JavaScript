const solution = (numbers) => {
  numbers.sort((a, b) => a - b);

  const product1 = numbers[0] * numbers[1];
  const product2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return Math.max(product1, product2);
};
