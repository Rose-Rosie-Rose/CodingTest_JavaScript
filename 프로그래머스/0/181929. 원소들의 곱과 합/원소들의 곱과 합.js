const solution = (num_list) =>  {
    let multiplication = 1
    let squareSum = 0
    
    num_list.forEach(item => {
        multiplication *= item
        squareSum += item
    })
            
    return multiplication < squareSum * squareSum ? 1 : 0
}