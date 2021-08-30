//1. Function Declaration
// function name (param1, param2) {body... return};
// one function === one thing
// naming doSometing, command, verb 동사형태
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);


//2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const elliek = { name: 'ellie'};
changeName(elliek);
console.log(elliek);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('hi~');


//4. rest parameters (added in ES6)
function printAll(...args) {
    for (let i =0; i< args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream','coding','ellie');


//5. Local scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'globalll'; //global variable
function printMessage() {
    let message = 'hellooo';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); // 에러뜸 - 자식은 부모것을 인지가능 but 그 반대는 ㄴㄴ
}
printMessage();

//console.log(message); //에러뜸


//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);


//7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point >10 ) {
        //long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if(user.point >10 ) {
        return;
    }
     //long upgrade logic...
}








//1. Function Expression
// function hoisting 도 가능.

const print = function () { //anonymous function
    console.log('print');
};
print();
const printAgain = print; 
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2 callback function suing functino expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }    else {
        printNo();
    }
}
const printYes = function() {
    console.log('yes');
};
const printNo = function print() {
    console.log('no');
   //print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

///3. Arrow function
//always anonymous
    //const simplePrint = function () {
    //    console.log('simplePrint');
    //};
const simplePrint = () => console.log('simplePrint');
simplePrint();
const add = (a,b) => a+b; 
const simpleMultiply = (a,b) => {
    return a*b;
}

//++IIFE: Immediately Invoked Function Expression


//function calculate(command, a, b)
//command:9(add, subsstract, divide, multiply, remainder)




