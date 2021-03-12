//1. Function to check max of two numbers

// function max(a,b){
//     if(a>b)
//     console.log(a);
//     else if(b>a)
//     console.log(b);
//     else
//     console.log("both are equal");
// }
// max(10,15);

//2.isLandscape

// function isLandscape(width, height){
//     if(width>height) return(true);
//     return(false);
// }
// console.log(isLandscape(10,20));

//Optmised code

// function isLandscape(width, height){
//     return(width>height)
// }
// console.log(isLandscape);

//________________Assignment________________________//

//1
// FizzBuzz
// number Divisible by 3 => display fizz
// number Divisible by 5 => display buzz
// number Divisible by both 3 & 5 => display fizzbuzz
// number not Divisible by both 3 & 5 => display the input
// Not a number => display 'Not a Number'

//2
//Demerit point 
//Speed limit = 70 display message 'Ok'
//5 -> 1 point
//10 -> 2 point
//Math.floor
//12 Points - License is suspended

// let speedLimit = 70;
// let speedPerPoint = 5;
// let maxPoint = 12;

// function checkSpeed(speed){
//     if(speed<speedLimit+speedPerPoint){
//         console.log("Ok");
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / speedPerPoint);
//     if(points >= maxPoint)
//     console.log('License Suspended');
//     else
//     console.log('Points: ',points);
// }

// checkSpeed(100);

//5
//Even and Odd Numbers

// function showNumber(number){
//     for(i=0;i<=number;i++){
//         if(i % 2 == 0){
//             console.log(i+" is Even");
//         }
//         else{
//             console.log(i+" is Odd");
//         }

//     }
// }

// showNumber(15);

//Optmised code

// function showNumber(limit){
//     for(let i=0;i<=limit;i++){
//         const message = (i % 2 ==0)? "is Even":"is Odd";
//         console.log(i,message);
//     }
// }
// showNumber(20);

//6
//Count truthy values from array

// const array=[0,null, undefined, false, '', 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array){
//     let count = 0;
//     for(let value of array)
//         if(value)
//             count++;
//         return count;
// }

//7
//String Properties

//showProperties(object)

// function showProperties(object){
//     for(let key in object) {
//         if(typeof object[key] === 'string')
//             console.log(key,object[key]);
//     }
// }

// const movie = {
//     title:'a',
//     releaseYear :2018,
//     rating : 4.5,
//     director: 'b'
// }

// showProperties(movie);

//8
//Sum of all the multiples of 3 and 5
// let sum=0;
// function sum1(num){
    
//     for(i=0;i<=num;i++){
//         if((i / 3 == 0) || (i / 5==0)){
//             sum=sum+i;
//         }
//     }
//     return sum;
// }

// console.log(sum1(10));



//9
//find the average 
//calculate the grade of a student 
//const marks=[80,80,50]

//average 1-59:F;
//average 60-69:D;
//average 70-79:C;
//average 80-89:B;
//average 90-100:A;
//calculateGrade(marks);



//10
//displaying stars patterns after accepting a number
//showStar(10);

// showStar(10);
// function showStar(rows){
//     for(let row=1; row<= rows;row++){
//         let pattern = '';
//         for(let i=0;i<row;i++)
//             pattern+='*';
//         console.log(pattern);
//     }
// }

//11
//Prime Numbers
//ShowPrime(limit)
