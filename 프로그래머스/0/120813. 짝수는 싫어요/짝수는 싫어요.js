const solution = (n) => {
    let oddNumber = []
    for(let i = 1; i <= n; i+=2){
        oddNumber.push(i)
    }
    return oddNumber.sort((x,y) => x-y)
}