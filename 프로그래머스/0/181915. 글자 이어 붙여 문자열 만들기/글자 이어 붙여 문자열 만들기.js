const solution = (my_string, index_list) => {
    return index_list.map(item => my_string[item]).join("")
}