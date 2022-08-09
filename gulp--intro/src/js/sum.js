const sum = (arr) => {
    return arr
        .filter( n => typeof n === 'number')
        .reduce( (n,a) => n + a, 0);
}