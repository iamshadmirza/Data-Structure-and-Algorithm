// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let string = str.split('').reduce((accumulator, character) => {
//         return character + accumulator;
//     }, '');
//     return string === str;
// }

function palindrome(str) {
    return str.split('').every((character, i) => {
        return character === str[str.length - i - 1];
    });
}

module.exports = palindrome;
