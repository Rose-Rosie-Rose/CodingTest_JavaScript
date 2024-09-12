const solution = (myString) => {
  return myString
    .split("x")
    .filter((str) => str !== "x" && str !== "")
    .sort();
};
