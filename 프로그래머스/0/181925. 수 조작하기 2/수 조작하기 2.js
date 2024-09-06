const solution = (numLog) => {
  const result = [];

  for (let i = 1; i < numLog.length; i++) {
    const difference = numLog[i] - numLog[i - 1];

    if (difference === 1) {
      result.push("w");
    } else if (difference === -1) {
      result.push("s");
    } else if (difference === 10) {
      result.push("d");
    } else {
      result.push("a");
    }
  }
  return result.join("");
};