const solution = (numbers, direction) => {
    const copiedNumbers = [...numbers]
    
    if(direction === "right"){
        copiedNumbers.unshift(copiedNumbers.pop());
    } else if (direction === "left"){
        copiedNumbers.push(copiedNumbers.shift())
    }
    
    return copiedNumbers
}