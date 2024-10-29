const solution = (i, j, k) => {
    let count = 0;
    for (let a = i; a <= j; a++) {
        let str = a.toString();
        for (let char of str) {
            if (char === k.toString()) {
                count += 1;
            }
        }
    }
    return count;
}