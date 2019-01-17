// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const resullt = [];
    for (let i = 0; i < n; i++) {
        resullt.push([]);
    }
    let counter = 1;
    let startRow = 0;
    let startColumn = 0;
    let endRow = n - 1;
    let endColumn = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        // top row
        for (let i = startRow; i <= endColumn; i++) {
            resullt[startRow][i] = counter;
            counter++;
        }
        startRow++;
        //right most column
        for (let i = startRow; i <= endRow; i++) {
            resullt[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        //bottom most row
        for (let i = endColumn; i >= startColumn; i--) {
            resullt[endRow][i] = counter;
            counter++;
        }
        endRow--;
        //start column
        for (let i = endRow; i >= startRow; i--) {
            resullt[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return resullt;
}

module.exports = matrix;
