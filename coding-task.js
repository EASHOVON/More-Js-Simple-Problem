// Creat the variables to represent scores of exams for John and Nick and set the values 80 and 45.
// var JohnScore = 80;
// var NickScore = 45;
// Create the variables to set the lower limit for passing the exam and assign the value 51.
// var lowerLimit = 51;
// Write the condition in if statement which will check if both students have passed an exam and log the result in console.
// if (JohnScore > lowerLimit && NickScore > lowerLimit)
// {
//     console.log("Both students have passed the exam");
// }

// Use else if statement in order to check if one of the students has passed an exam and log the result in console.
// else if (JohnScore > lowerLimit || NickScore > lowerLimit)
// {
//     console.log("One of the students has passed the exam: ");

//     if (JohnScore > NickScore)
//     {
//         console.log("and it is John with " + JohnScore + " points");
//     } else
//     {
//         console.log("and it is Nick with " + NickScore + " points");
//     }
// }

// Use else statement in order to check if both students have failed an exam and log the result in console.
// else
// {
//     console.log("Both students have failed the exam");
// }


// const myArray = [];
// let i = 5;
// while (i >= 0)
// {
//     myArray.push(i);
//     i--;
// }
// console.log(myArray);

// Setup
// const myArray = [];

// // Only change code below this line
// for (let i = 9; i >= 1; i -= 2)
// {
//     myArray.push(i);
// }

// const arr = [
//     [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++)
// {
//     for (let j = 0; j < arr[i].length; j++)
//     {
//         console.log(arr[i][j]);
//     }
// }

// function multiplyAll(arr)
// {
//     let product = 1;
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++)
//     {
//         for (let j = 0; j < arr[i].length; j++)
//         {
//             product = product * arr[i][j]
//         }
//     }
//     // Only change code above this line
//     return product;
// }

// const multiplyResult = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// console.log(multiplyResult);


// function multiply(arr, n)
// {
//     if (n <= 0)
//     {
//         return 1;
//     } else
//     {
//         return multiply(arr, n - 1) * arr[n - 1];
//         /*
//                multiply(arr, 6-1) * arr[6-1]
//                multiply(arr, 5-1) * arr[5-1] * arr[6-1]
//                multiply(arr, 4-1) * arr[4-1] * arr[5-1] * arr[6-1]
//                multiply(arr, 3-1) * arr[3-1] * arr[4-1] * arr[5-1] * arr[6-1]
//                multiply(arr, 2-1) * arr[2-1] * arr[3-1] * arr[4-1] * arr[5-1] * arr[6-1]
//                multiply(arr, 1-1) * arr[1-1] * arr[2-1] * arr[3-1] * arr[4-1] * arr[5-1] * arr[6-1]
//                multiply(arr, 0) * arr[0] * arr[2-1] * arr[3-1] * arr[4-1] * arr[5-1] * arr[6-1]
//                1 * 1 * 2 * 3 * 4 * 5 * 6

//         */
//     }
// }

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = multiply(myArray, 6);
// console.log(result);

// function sum(arr, n)
// {
//     // Only change code below this line
//     if (n <= 0)
//     {
//         return 0;
//     }
//     return sum(arr, n - 1) + arr[n - 1];
//     /*
//             sum(arr, 3-1) + arr[3-1]
//             sum(arr, 2-1) + arr[2-1] + arr[3-1]
//             sum(arr, 1-1) + arr[1-1] + arr[2-1] + arr[3-1]
//                   0       +  arr[0]  +  arr[1]  +  arr[2]
//                   0+2+3+4
//      */
//     // Only change code above this line
// }

// const result = sum([1], 0);
// console.log(result);

// Setup
// const contacts = [
//     {
//         firstName: "Akira",
//         lastName: "Laine",
//         number: "0543236543",
//         likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//         number: "0994372684",
//         likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//         firstName: "Sherlock",
//         lastName: "Holmes",
//         number: "0487345643",
//         likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//         firstName: "Kristian",
//         lastName: "Vos",
//         number: "unknown",
//         likes: ["JavaScript", "Gaming", "Foxes"],
//     },
// ];

// function lookUpProfile(name, prop)
// {
//     // Only change code below this line
//     for (let i = 0; i < contacts.length; i++)
//     {
//         if (name === contacts[i].firstName)
//         {
//             if (contacts[i].hasOwnProperty(prop))
//             {
//                 return contacts[i][prop]
//             } else
//             {
//                 return "No such property"
//             }
//         }
//     }

//     return "No such contact"
//     // Only change code above this line
// }

// const result = lookUpProfile("Kristian", "lastName");
// console.log(result);


// function randomRange(myMin, myMax)
// {
//     // Only change code below this line
//     return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

//     // Only change code above this line
// }

// const result = randomRange(20, 25);
// console.log(result);

// function myBio(firstName, lastName, company)
// {
//     return `${ firstName } ${ lastName } runs ${ company }`;
// }
// console.log(myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]));

// function mySlice(array, from, untill)
// {
//     let slicedArray = [];
//     if (untill === undefined || untill > array.length)
//     {
//         untill = array.length;
//     }

//     if (untill < 0)
//     {

//     }

//     for (let i = from; i < untill; i++)
//     {
//         slicedArray.push(array[i]);
//     }
//     return slicedArray;
// }

// const arr = ["Hello", "Gello", "Mello"];
// const afterSlice = mySlice(arr, 1, 2);
// console.log(afterSlice);

// make a function like arry.slice()
// function mySlice(array, from, untill)
// {
//     let slicedArray = [];
//     if (untill === undefined || untill > array.length)
//     {
//         untill = array.length;
//     }

//     if (untill < 0)
//     {
//         untill = array.length + untill;
//     }

//     for (let i = from; i < untill; i++)
//     {
//         slicedArray.push(array[i]);
//     }
//     return slicedArray;
// };

// const myArray = [24, 25, 36, 68, 34, 75, 40, 56];
// const resultSlice = mySlice(myArray, 0);
// console.log(resultSlice);

// make function like array.splice()
// function mySplice(array, from, deleteCount, ...args)
// {
//     let splicedArray = [];
//     if (deleteCount === undefined)
//     {
//         deleteCount = array.length - from;
//     }

//     if (deleteCount < 0)
//     {
//         deleteCount = 0;
//     }

//     for (let i = 0; i < from; i++)
//     {
//         splicedArray.push(array[i]);
//     }

//     for (let i = 0; i < args.length; i++)
//     {
//         splicedArray.push(args[i]);
//     }

//     for (let i = from + deleteCount; i < array.length; i++)
//     {
//         splicedArray.push(array[i]);
//     }

//     return splicedArray;
// }

// const bigArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultSplice = mySplice(bigArray, 2, 4, "a", "b", "c");
// console.log(resultSplice);


// ‍array.prototype.splice(start, deleteCount, item1, item2, ...)
// start: The index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array.
// deleteCount: The number of elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. If deleteCount is omitted, or if the number is larger than array.length - start, all elements from start to the end of the array will be deleted.
// item1, item2, ...: The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
Array.prototype.mySplice = function (start, deleteCount, ...args)
{
    let splicedArray = [];
    if (deleteCount === undefined)
    {
        deleteCount = this.length - start;
    }

    if (deleteCount < 0)
    {
        deleteCount = 0;
    }

    for (let i = 0; i < start; i++)
    {
        splicedArray.push(this[i]);
    }

    for (let i = 0; i < args.length; i++)
    {
        splicedArray.push(args[i]);
    }

    for (let i = start + deleteCount; i < this.length; i++)
    {
        splicedArray.push(this[i]);
    }

    return splicedArray;
}


const bigArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultSplice = bigArray.mySplice(2, 4, "a", "b", "c");
console.log(resultSplice);

// Array.prototype.slice(start, end)
// start: The index at which to begin extraction. If negative, it is treated as length+start where length is the length of the array.
// end: The end index at which to end extraction. If negative, it is treated as length+end. If end is omitted, slice extracts to the end of the array.
Array.prototype.mySlice = function (start, end)
{
    let slicedArray = [];
    if (end === undefined || end > this.length)
    {
        end = this.length;
    }

    if (end < 0)
    {
        end = this.length + end;
    }

    for (let i = start; i < end; i++)
    {
        slicedArray.push(this[i]);
    }
    return slicedArray;
}

const myArray = [24, 25, 36, 68, 34, 75, 40, 56];
const resultSlice = myArray.mySlice(4, -1);
console.log(resultSlice);

const builtInSlice = myArray.slice(4, -1);
console.log(builtInSlice)