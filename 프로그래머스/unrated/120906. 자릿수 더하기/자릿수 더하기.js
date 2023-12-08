const solution = n => {
    let sum = 0
    const arr = String(n).split("");
    for(i = 0; i < arr.length; i++){
        sum += Number(arr[i])
    }
    return sum
}