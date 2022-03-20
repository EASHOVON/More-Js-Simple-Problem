function largestOfFour(arr)
{
    let result = [];
    for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++)
    {
        let largestNumber = arr[arrayIndex][0];
        for (let subArrayIndex = 1; subArrayIndex < arr[arrayIndex].length; subArrayIndex++)
        {
            if (arr[arrayIndex][subArrayIndex] > largestNumber)
            {
                largestNumber = arr[arrayIndex][subArrayIndex];
            }
        }
        result[arrayIndex] = largestNumber;
    }
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size)
{
    let result = [];
    let index = 0;
    while (index < arr.length)
    {
        result.push(arr.slice(index, index + size));
        index += size;
    }
    return result;
}   