var input_string = process.argv.slice(-1)[0];

/**
 * Подготовим строку, удалив из нее все ненужные символы и приведя символы к нижнему регистру
 */
var prepareString = function (input_string) {
    var re = /[^A-Za-z0-9]/g;
    return input_string.replace(re, '').toLowerCase();
};

/**
 * Проверяет строку на палиндром посимвольным сравнением
 */
var isPalindrom = function (input_string) {
    input_string = prepareString(input_string);
    var string_length = input_string.length;
    for (var i = 0; i  < string_length / 2; i++) {
        if (input_string[i] !== input_string[string_length - 1 - i]) {
            return false;
        }
    }
    return true;
};
var result = isPalindrom(input_string) ? "YES" : "NO";
process.stdout.write(result);