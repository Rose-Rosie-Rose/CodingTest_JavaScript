const solution = (myString, pat) => {
    let count = 0;
    let position = 0;

    while ((position = myString.indexOf(pat, position)) !== -1) {
        count++;
        position += 1;
    }

    return count;
}