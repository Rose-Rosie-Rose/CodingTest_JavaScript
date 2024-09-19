const solution = (my_string, indices) => {
    const sortedIndices = indices.sort((a, b) => b - a);
    
    let myArr = [...my_string];
    
    sortedIndices.forEach(index => {
        myArr.splice(index, 1);
    });
    
    return myArr.join('');
}