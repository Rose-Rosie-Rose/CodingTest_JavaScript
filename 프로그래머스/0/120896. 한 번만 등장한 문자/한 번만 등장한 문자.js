const solution = (s) =>  {
    let result = []
    const sArray = s.split('')
    
    sArray.forEach(i => {
        if(s.indexOf(i) === s.lastIndexOf(i)){
            result.push(i)
        }
    })
    return result.sort().join('')
}