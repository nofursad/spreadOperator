/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
 console.log("Second array:", arr2);
 console.log("First Array:", arr1);

// Copying an array

let arr3 = [4, 5, 6];
// let arr4 = [...arr3];
// arr4.push(7);
let arr4 = [...arr3, 7]; //Similary result as line 17 and 18 combine
console.log("Third Array:", arr3);
console.log("Fourth Array:", arr4);

// Copying an object

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};
console.log(obj1);
console.log(obj2);
console.log(obj3);

// Copying only part of an array/object
let arr5 = obj1[0]
console.log(arr5);