// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    str = str.split('')
    for (let i = 0; i < str.length / 2; i++) {
        let temp = str[i];
        str[i] = str[str.length - 1 - i];
        str[str.length - 1 - i] = temp;
    }
    return str.join('');
}

module.exports = reverse;

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

// function reverse(str) {
//     return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
// }