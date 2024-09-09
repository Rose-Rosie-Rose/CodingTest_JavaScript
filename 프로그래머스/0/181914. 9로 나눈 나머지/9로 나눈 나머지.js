const solution = (number) => {
  const sumOfEachDigit = number
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  return sumOfEachDigit % 9;
};