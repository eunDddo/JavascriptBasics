'use strict';

//Array

// 1. declaration
const arr1 = new Array();
const arr2 = [1, 2]; 

// 2. Index position
const fruits = ['π','π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // object μμkeyκ°μ λ£μΌλ©΄ κ·Έμ μμνλ valueλ₯Ό λ°μμ¬ μ μμλ€.
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

//3. Looping over an array
//print all fruits

//a. for
for(let i=0; i<fruits.length; i++ ) {
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
//λ°°μ΄μ λΆλ¬μ΄, λ°°μ΄μλ€κ° ν¨μλ₯Ό λΆλ¬μ΄, κ·Έ ν¨μλ₯Ό μΈμλ§λ€ μ μ©μν΄
fruits.forEach(function () {
    console.log('he');
}) //he he

fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
})

//fruits.forEach((fruit, index, array) => console.log(fruit, index, array););

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('π','π');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('π','π');
console.log(fruits);
//shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

//note!!!! shiftμ unshiftλ μ λ§μ λ§ λλ¦¬λ€. μ¬μ©μμ ..

///splice: remove an item by index position
fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1,1,'π₯', 'π₯₯');
console.log(fruits);


//combine two arrays
const fruits2 =['π', 'π'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
//find th index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.includes('π₯'));
