const solution = (rsp) => {
  return rsp
    .split("")
    .map((item) => (Number(item) === 2 ? 0 : Number(item) === 0 ? 5 : 2))
    .join("");
};
