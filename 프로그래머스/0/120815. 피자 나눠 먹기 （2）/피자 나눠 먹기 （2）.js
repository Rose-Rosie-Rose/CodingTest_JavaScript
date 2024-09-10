const solution = (n) => {
    let slices = 6; 
    let pizzas = 1; 

    while ((slices * pizzas) % n !== 0) {
        pizzas++;
    }

    return pizzas;
}