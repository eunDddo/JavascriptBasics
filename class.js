'use strict';

//1. class declarations
class Person {
    //constructor 생성자
    constructor(name,age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
    console.log(`${this.name}: hello!`);
}
}
//이걸로 새로운 object 만들기 => this 자리에 object
const ellie  = new Person('ellie', 20);
console.log( ellie.name);
console.log( ellie.age);
ellie.speak();

//2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        //if (value<0) {
        //   throw Error ('age can not be negative');
        //}
        this._age = value <0 ? 0:value;
    }
   
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);



//3. Fields (public, private) 쵠근 추가된 것
class Experiment {
    publicField = 2; //외부접근 가능
    #privateField = 0; //class 내부에서만 값 접근 가능
}
const experiment =new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


//4.static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //not article1.publisher
Article.printPublisher(); //호출

//5. Interitance 상속과 다향성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    
    getArea() {
        return this.width*this.height;
    }
}

class Rectangular extends Shape {}
class Triangular extends Shape {
    getArea() {
        console.log(super.getArea()); 
        return (this.width*this.height)/2; 
    }
}

const rectangular = new Rectangular(20,20,'blue');
rectangular.draw();
console.log(rectangular.getArea());

const triangular = new Triangular(20,20,'red');
triangular.draw();
console.log(triangular.getArea());



//6. Class checking: InstanceOf
console.log(rectangular instanceof Rectangular);  //T
console.log(triangular instanceof Rectangular);//F
console.log(triangular instanceof Triangular);  //T
console.log(triangular instanceof Shape);     //T
console.log(triangular instanceof Object);   //T!! 모든objectclass들은 Object를 상속함.