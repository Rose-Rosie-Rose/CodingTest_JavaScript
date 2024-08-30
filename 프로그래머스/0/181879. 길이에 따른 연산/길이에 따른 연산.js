const solution = (num_list) => {
  return num_list.length >= 11
    ? num_list.reduce((sum, item) => sum + item, 0)
    : num_list.reduce((multiplication, item) => multiplication * item, 1);
};