const solution = (my_string, s, e) => {
    const arr = [...my_string]
    const reverse = arr.slice(s, e + 1).reverse()
    
    arr.splice(s, reverse.length, ...reverse)
    
    return arr.join("")
}