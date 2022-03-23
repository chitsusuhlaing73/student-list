export function sum(...num) {
    let total = 0;
    for (var n of num) {
        total += n;
    }
    return total;
}
