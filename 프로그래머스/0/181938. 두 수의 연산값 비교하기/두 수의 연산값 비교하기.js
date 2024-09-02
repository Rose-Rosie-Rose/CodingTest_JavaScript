const solution = (a, b) => {
  const concatenated = parseInt(a.toString() + b.toString());
  const product = 2 * a * b;

  return concatenated > product ? concatenated : product;
};