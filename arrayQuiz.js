//Q1. make a string out of an array
// 배열을 string으로 
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
}
//Q2. make an array out of a string
//string을 배열로
{
const fruits = '🍎, 🥝, 🍌, 🍒'
const result = fruits.split(',');
console.log(result);
}

//Q3. make this array look like this: [5, 4, 3, 2, 1]
//주어진 배열을 거꾸로 보이게 만들기
{
const array = [1, 2, 3, 4, 5];
const result = array.reverse();
console.log(result);
}

//Q4. make new array without the first two elements

{
    const array = [1, 2, 3, 4, 5]
    const result =  array.splice(0,2)
    console.log(result); //[1, 2]
    console.log(array);  //[3, 4, 5]
}

{
    const array = [1, 2, 3, 4, 5]
    const result =  array.slice(2, 5);
    console.log(result); 
    console.log(array); 
}


//Q5~Q10
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score=score;
        }
    }

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
    ];



//Q5 find a student with the score 90
{
    const result = students.find(function (student, index) {
        return student.score === 90;    
    });
    console.log(result);
    }
const result1 = students.find((student) =>student.score === 90 );
console.log(result1);

// Q6. make an array of enolled students
{
    const result = students.filter(function(student) {
        return student.enrolled ; //===true;
    } );
    console.log(result);

    }
{
    const result = students.filter((student)=>student.enrolled);
    console.log(result);
}


//Q7. make an array containing only the students' scores 
//result should be: [45, 80, 90, 66, 88]

const result2 = students.map(function(student, index, array) {
    return student.score;
});
console.log(result2);





//Q8. check if there is a student with the score lower than 50
{const result = students.some(function(student){
    return student.score < 50;
})
console.log(result);} //true

{const result = students.every(function(student){
    return student.score < 50;
})
console.log(result);} //true





// Q9. compute students' average score
{
const result = students.reduce(function(prev, curr) {
    console.log('----');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
},0)
console.log(result);
}


//Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
const result = students.map(function(student){
    return student.score;
})  
console.log(result.join());
}

{
const result = students
  .map((student) => student.score)
  .filter((score) => score>=50)
  .join();
console.log(result);
}

//bonus
//result should be: '45, 66, 80, 88, 90' ascending order
{
const result = students

.map(student => student.score)

.sort((a,b)=>a-b)

.join();

console.log(result);

}


