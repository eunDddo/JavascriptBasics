//1 String concatenation
console.log('my' + ' cat');
console.log('1'+ 2);
//string literals: 특수 기호도 문자열로 포함해서 출력해준다
console.log(`string literals:


'''
1 + 2 = ${1+2}`);

//특수기호 문자열로 출력하려면 backslash\
//줄바꿈 \n, tab \t
console.log("ellie\'s \n\tbook");


//2.Numeric operators
console.log(2**3); //제곱. 8
console.log(5%2);//나머지 1

//3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter; //counter= counter+1, preIncre = counter //33
const postIncrement = counter++; //postInc=counter, conter=counter+1 // 34

//4, Assignment operators
let x =3;
let y = 6;
x+=y; // x= x+y..

//5. Comparison operators
console.log(10<6);//..

//6. Logical operators: ||or &&and !not
const value1 = false;
const value2 = 4<2;

///||or : 처음으로 true 가 나오면 거기서 멈춤!
console.log(`or: ${value1||value2||check()}`);

///&&and : 처음으로 false 가 나오면 거기서 멈춤!
console.log(`and: ${value1&&value2&&check()}`);

//!not 반대값을 출력
console.log(!value1);

function check() {
   for (let i=0; i<10; i++){
    console.log('깪');
   }
   return true;
}


//7. Equlity operators
const stringFive = '5';
const numberFive = 5;

//==loose equ
console.log(stringFive==numberFive);
console.log(stringFive!=numberFive);
//===struct equal 데이터 타입까지 따짐 
console.log(stringFive === numberFive);
console.log(stringFive !==numberFive);

// obgect equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1 ;
console.log(ellie1==ellie2);//false
console.log(ellie1===ellie2);//false
console.log(ellie1===ellie3);//true

//8. conditional operator: if
//if, else if, else

//9.Ternary operator: ?
//condition ? value1 : value2;
const name = 'df';
console.log(name === 'ellie'? 'yes': 'no');

//10.Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch(browser) {
    case 'IE': 
        console.log('go away!');
        break;
    case 'Chrome':
        case'FireFox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//11.Loops
//while loop, while the condition is truthy, body code is executed
let j =3;
while (j>0) {
    console.log(`while: ${j}`);
    j--;    
}//3 2 1 

//do while loop, body code is executed first, then check the condition
do{
    console.log(`do while: ${j}`);
    j--;
}while (j>0); //0

//for loop, for(begin; condition; step)
for(i=3; i>0; i--) {
    console.log(`for: ${i}`);
} // 3 2 1
for (let i=3; i>0; i+=-2) {
    console.log(`inline variable for: ${i}`)
}
//neted loops 0.0-9, 1.0-9..
for (let i=0; i<10; i++) {
    for(let j=0; j<10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
for (let i=0; i<=10; i++) {
    if (i%2===0) {
        console.log(`${i}`);
    }
}
for (let i=0; i<11; i++) {
    console.log(`${i}`);
    if (i===8) {break;}
}