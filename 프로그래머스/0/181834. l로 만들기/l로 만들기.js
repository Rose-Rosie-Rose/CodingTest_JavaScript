const solution = (myString) => {
  return (answer = myString
    .split("")
    .map((char) => (char < "l" ? "l" : char))
    .join(""));
};
