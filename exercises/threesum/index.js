//Given an array of n integer, find all unique triplets in the array with gives the sum zero. a + b + c = 0;

//brute force
function threeSum(array) {
    //first sort the array
    array.sort((a, b) => a - b);

    //then loop over i, j, k and find unique triplet
    let uniqueTriplet = [];
    for (let i = 0; i < array.length - 2; i++) {
        //check for duplicate
        if (i > 0 && array[i - 1] === array[i]) continue;
        //fix first element
        const a = array[i];
        if (a > 0) { return uniqueTriplet; }
        //to iterate j in increasing order and k in decreasing order
        let j = i + 1;
        let k = array.length - 1;
        while (j < k) {
            const b = array[j];
            const c = array[k];
            //when triplet is found
            if ((a + b + c) === 0) {
                uniqueTriplet.push([a, b, c]);
            }
            //if not then update j and k and check for duplicate
            if ((a + b + c) <= 0) {
                while (array[j + 1] === array[j]) { j++ };
                j++;
            }
            if ((a + b + c) >= 0) {
                while (array[k - 1] === array[k]) { k-- };
                k--;
            }
        }
    }
    return uniqueTriplet;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));