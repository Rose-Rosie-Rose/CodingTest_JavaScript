const solution = (num_list, n) => {
    const firstPart =  [...num_list].slice(n)
    const secondPart = [...num_list].slice(0, n)
    
    return firstPart.concat(secondPart)
}