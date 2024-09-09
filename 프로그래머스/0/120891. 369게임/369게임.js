const solution = (order) => {
  return order
    .toString()
    .split("")
    .filter((num) => ["3", "6", "9"].includes(num)).length;
};