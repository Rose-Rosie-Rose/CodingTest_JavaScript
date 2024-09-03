const solution = (arr) => {
    let result = [];

    arr.forEach(item => {
        for (let i = 0; i < item; i++) {
            result.push(item);
        }
    });

    return result;
}