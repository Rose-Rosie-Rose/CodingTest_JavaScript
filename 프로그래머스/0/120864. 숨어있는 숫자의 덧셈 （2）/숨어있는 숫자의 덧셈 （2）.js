const solution = (my_string) => {
    return (my_string.match(/\d+/g) || [])
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
};