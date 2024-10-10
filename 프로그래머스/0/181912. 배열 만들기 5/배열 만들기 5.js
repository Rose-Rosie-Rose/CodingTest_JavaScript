const solution = (intStrs, k, s, l) => {
    const result = []
    
    intStrs.forEach(str => {
        const num = parseInt(str.substring(s, s + l), 10);
        
        if (num > k) {
            result.push(num);
        }
    });
    
    return result;
}