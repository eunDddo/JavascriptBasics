//Objects
//one of the JavaScript's data type
//a collection of related data and/or functionlality
//nearly all objects in Javascript are instances of Object
//object = {key(특징): value(값)};

// 1. Literals and properties
const name = 'ellie';
const age = 20;

const obj1 = {};// object literal syntax
const obj2 = new Object(); // object constructor syntax

print( name, age );
function print(name, age) {
    console.log(name);
    console.log(age);
}
const ellie = {name: 'ellie', age: 4};
print(ellie);


// 2. Computed properties
//key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);


//예시 obj에 상응하는 key를 받아서 출력하는 함수. key에 뭐가 있는지 입력값을 받아야만
//정상적으로 시행가능하다.
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');

//3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 4};
const person3 = {name: 'dave', age: 3};
const person4 = new Person('ellie', 20);

//4.Constructor function
function Person(name, age) {
    //this = {}
        this.name = name;
        this.age = age;
    // return this;
    };

//5. in operator: property existence check (key in obj)
    console.log('name' in ellie);
    console.log('age' in ellie);
    console.log(ellie.random);

// 6. for..in vs for..of
//for (key in ellie)
console.clear();
    for(key in ellie) {
        console.log(key);
    }

//for (value of iterable)
const array = [1,2,3,5];
for (let i=0; i<array.length; i++) {
    console.log(array[i]);
}

for (value of array) {
    console.log(value);
}

// 7. Cloning
//object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
console.log(user);

//old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//저장할 변수 정의
const user4 = {};

Object.assign(user4, user);
const user4 = Object.assign({}, user);

//다른 예제
const fruit1 = {color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue : 뒤에있는 애를 덮어씌움
console.log(mixed.size); // big