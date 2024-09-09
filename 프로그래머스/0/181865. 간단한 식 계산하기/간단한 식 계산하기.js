const solution = (binomial) => {
  const [a, op, b] = binomial.split(" ");

  const numA = parseInt(a);
  const numB = parseInt(b);

  return op === "+" ? numA + numB : op === "-" ? numA - numB : numA * numB;
};