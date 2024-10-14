const solution = (arr) => {
    let length = arr.length
    
    const isPowerOfTwo = (num) => (num & (num - 1)) === 0
    
    while (!isPowerOfTwo(length)) {
        arr.push(0);
        length++;
    }
    
    return arr
}