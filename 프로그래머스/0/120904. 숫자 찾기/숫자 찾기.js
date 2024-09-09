const solution = (num, k) => {
    const numStr = num.toString();
    const index = numStr.indexOf(k.toString()); 
    
    return index === -1 ? -1 : index + 1
}