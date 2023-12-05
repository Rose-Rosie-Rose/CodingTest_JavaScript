const solution = sides => {
    const arr = [...sides].sort((x, y) => x - y)
    return arr[2] < arr[1] + arr[0] ? 1 : 2
}