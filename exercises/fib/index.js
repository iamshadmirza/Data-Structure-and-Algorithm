// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, i = 2, result = [0, 1]) {
    if (n < 2) { return n }
    if (i > n) {
        return result[n];
    }
    result.push(result[i - 1] + result[i - 2])
    return fib(n, i + 1, result);
} //executed in 0.649s total

// function fib(n) {
//     if (n < 2) { return n; }
//     return fib(n - 1) + fib(n - 2);
// } //executed in 1.964s

// function fib(n) {
//     const result = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         let a = result[i - 1];
//         let b = result[i - 2];
//         result.push(a + b);
//     }
//     return result[n];
// }

module.exports = fib;
