const solution = (a, b) => {
    const concatenated = parseInt(a.toString() + b.toString())
    const connectedBackwards = parseInt(b.toString() + a.toString())
    
    return concatenated < connectedBackwards ? connectedBackwards : concatenated
}