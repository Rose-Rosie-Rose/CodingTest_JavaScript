const solution = (my_string) => {
    return my_string.split("").map(item => 
        item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    ).join('');
}