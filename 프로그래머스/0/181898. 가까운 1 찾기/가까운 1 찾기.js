const solution = (arr, idx) => {
    const result = arr.findIndex((item, index) => item === 1 && index >= idx)
    
    return result === -1 ? -1 : result;
}