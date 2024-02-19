const solution = (my_string) => {
    let result = []
    for(let i = 0; i < my_string.length; i++) {
        my_string[i] === my_string[i].toLowerCase() ? 
        result.push(my_string[i].toUpperCase()) : 
        result.push(my_string[i].toLowerCase())
    }
    
    return result.join("")
}