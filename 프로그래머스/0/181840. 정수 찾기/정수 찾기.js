const solution = (num_list, n) => {
    return num_list.find(item => item === n) !== undefined ? 1 : 0
}