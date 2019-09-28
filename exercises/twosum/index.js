const twoSum_On_Better = (arr, target) => {
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
console.log(twoSum_On_Better([11, 15, 2, 7], 9));