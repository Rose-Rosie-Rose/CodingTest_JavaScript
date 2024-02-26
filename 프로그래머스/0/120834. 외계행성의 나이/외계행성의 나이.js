const solution = (age) => {
    const arr = age.toString().split("")
    const alphabet = "abcdefghij"
    return arr.map(x => alphabet[x]).join("")
}