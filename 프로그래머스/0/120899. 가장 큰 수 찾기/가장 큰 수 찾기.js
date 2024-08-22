const solution = (array) => {
    const maximum = [...array].sort((x, y) => x - y)[array.length - 1]
    
    return [maximum, array.indexOf(maximum)]
}