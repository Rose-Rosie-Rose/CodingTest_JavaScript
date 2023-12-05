const solution = array =>  {
    const arr = [...array].sort((x, y) => y - x)
    return arr[Math.floor(arr.length / 2)];
}