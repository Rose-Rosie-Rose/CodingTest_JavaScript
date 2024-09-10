const solution = (age) => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  return String(age)
    .split("")
    .map((item) => alphabet[item])
    .join("");
};