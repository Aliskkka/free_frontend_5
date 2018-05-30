const input_string = process.argv[1];

const numbers_list = "1234567890";
const vowel_list = "aeiouy";
const consonant_list = "bcdfghjklmnpqrstvwxz";

const splitString = function (input_string) {
    const length = input_string.length;
    var numbers = [],
    vowel = [],
    consonant = [],
    char,
    char_lower,
    result = [];
    for (var i = 0; i < length; i++) {
        char = input_string[i];
        char_lower = input_string[i].toLowerCase();
        if (numbers_list.indexOf(char_lower) > -1) {
            numbers.push(char);
        }
        if (vowel_list.indexOf(char_lower) > -1) {
            vowel.push(char);
        }
        if (consonant_list.indexOf(char_lower) > -1) {
            consonant.push(char);
        }
    }
    vowel = vowel.join('');
    consonant = consonant.join('');
    numbers = numbers.join('');
    if (vowel) {
        result.push(vowel);
    }
    if (consonant) {
        result.push(consonant);
    }
    if (numbers) {
        result.push(numbers);
    }
    return result.join(' ');
}
process.stdout.write("1111");
process.stdout.write(splitString(input_string));