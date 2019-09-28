// Problem Statement — Given an array of integers, return indices of the two numbers such that they add up to a specific target.

const twoSum = (arr, target) => {
    let numObject = {};
    for (let i = 0; i < arr.length; i++) {
        numObject[arr[i]] = i;
    }
    let answer = null;
    arr.map((item, index) => {
        const difference = target - item;
        if (numObject[difference]) {
            //we are getting index of current item and value of difference (if difference is present in array/hash)
            answer = [index, numObject[difference]];
        }
    });
    return answer;
}

//better solution
const twoSum_Better = (arr, target) => {
    let numObject = {};
    for (let i = 0; i < arr.length; i++) {
        numObject[arr[i]] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        let difference = target - arr[i];
        if (numObject[difference]) {
            return [i, numObject[diff]];
        }
    }
}


console.log(twoSum([11, 15, 2, 7], 9));