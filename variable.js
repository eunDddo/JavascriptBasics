//1. use strict
'use strict';

//2. variable, rw(read/write)
// let (added in ES6)

let globalName = 'global name';

{let name = 'ellie';
console.log(name);

name= 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (쓰지마! 옛날꺼야!) -var hoisting

//3. Constants, r(read only) 읽기만 가능하고 다시 다른값으로 쓰는것 불가능
//only use le if variable needs to change.

const daysInWeek = 7;
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn= 'not a number'/2;


//
//Immutable data types: primitive types, frozen objects, 
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons
//: security, thread safety, reduce mistakes

//4. variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//funtion, fisrt-class function

//number
const count = 17; //integer
const size = 17.1; //decinmal num

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting= 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
console.log('value: '+ greeting + ', '+'type: ' + typeof greeting );


//boolean
//false:0, null, undefined, NaN ''
//true: any other value
const canRead = true;
const test = 3<1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${x} `);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
//string이 똑같을 때 동일한 symbol 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
//string으로 변환해서 출력해야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)


// Dynamic typing
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text=7;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`); //number
console.log(text.charAt(0)); //오류남..
//-> type script의 출현


//object, real-life object, data stucture
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;