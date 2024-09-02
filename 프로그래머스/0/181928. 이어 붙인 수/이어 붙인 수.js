const solution = (num_list) => {
    let evenSum = [];
    let oddSum = [];
    
    for (let i = 0; i < num_list.length; i++) {
        num_list[i] % 2 === 0 ? evenSum.push(num_list[i]) : oddSum.push(num_list[i]);
    }
    
    const evenNum = parseInt(evenSum.join(""));
    const oddNum = parseInt(oddSum.join(""));
    
    return evenNum + oddNum;
}