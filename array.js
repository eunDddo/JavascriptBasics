'use strict';

//Array

// 1. declaration
const arr1 = new Array();
const arr2 = [1, 2]; 

// 2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // object 에서key값을 넣으면 그에 상응하는 value를 받아올 수 잇었다.
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
//배열을 불러옴, 배열에다가 함수를 불러옴, 그 함수를 인자마다 적용시킴
fruits.forEach(function () {
    console.log('he');
}) //he he

fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
})

//fruits.forEach((fruit, index, array) => console.log(fruit, index, array););

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍓','🍑');
console.log(fruits);
//shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

//note!!!! shift와 unshift는 정말정말 느리다. 사용자제..

///splice: remove an item by index position
fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1,1,'🥝', '🥥');
console.log(fruits);


//combine two arrays
const fruits2 =['🍐', '🍒'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
//find th index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒'));
console.log(fruits.includes('🥟'));
