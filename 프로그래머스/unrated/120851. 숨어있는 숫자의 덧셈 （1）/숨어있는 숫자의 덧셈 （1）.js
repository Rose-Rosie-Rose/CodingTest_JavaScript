const solution = my_string => {
    let sum = 0
    my_string.split("").map(i => {
        !isNaN(i) ? sum += parseInt(i) : 0
    })
    return sum
}