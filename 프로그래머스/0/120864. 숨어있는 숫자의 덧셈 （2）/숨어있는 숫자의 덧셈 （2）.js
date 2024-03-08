const solution = (my_string) => {
    const arr = my_string.match(/\d+/g) || [];
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i])
    }
    return sum
}