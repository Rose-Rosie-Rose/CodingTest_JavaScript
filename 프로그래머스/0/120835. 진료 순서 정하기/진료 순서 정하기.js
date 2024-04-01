const solution = (emergency) => {
    const newEmerg = [...emergency].sort((a, b) => b - a)
    let result = []
    for (let i = 0; i < emergency.length; i++) {
    result.push(newEmerg.indexOf(emergency[i]) + 1);
  }
    return result
}