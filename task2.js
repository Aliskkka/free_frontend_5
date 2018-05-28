var n = process.argv[1];
/**
 * Обратим знак для четных чисел последовательности
 */
const revert_fib_sign = function (index, result) {
    return index % 2 === 0 ? -result : result;
};
/**
 * Вычисляет n-ый элемент последовательности Фибоначчи
 */
const fib = function (n) {
    var a = 1, b = 1, c = 0;
    const fib_index = Math.abs(n);
    if (n === 0) {
        return 0;
    }
    if (n > 0 && n < 3) {
        return 1;
    }
    if (n > -3 && n < 0) {
        return revert_fib_sign(fib_index, 1);
    }
    for (var i = 3; i <= fib_index; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    var result = c;
    if (n < 0) {
        result = revert_fib_sign(fib_index, result);
    }
    
    return result;
}
process.stdout.write(fib(n).toFixed(0));