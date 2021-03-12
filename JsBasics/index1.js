// console.log("hello Vishwas");
// console.log("hello Vishwas");
 

// //..............premitive Type...............//

// //alert(2*3);
// //var name="vishwas";

// //using let....
// let name='Vishwas';//String litseral
// console.log(typeof name);

// let age=23;//number literal
// console.log(typeof age);

// let isApproved=true;//boolean
// console.log(typeof isApproved);

// let firstName=undefined;//undefined
// console.log(typeof firstName);

// let lastName=null;//null
// console.log(typeof lastName);

// //..............Reference Type.............//

// let person={
//     name:"Vishwas",
//     city:"Bengaluru",
//     phone:8123604544
// };
// //accessing the properties using DOT operator 

// console.log(person.name);
// console.log(person.city);
// console.log(person.phone);

// //..........Nested object..............//

// let person1={
//     name1:"Vishwas",
//     address={
//         city1:"Bengaluru",
//         state:"Karnataka"
//     },
//     phone1:8123604544
// };

// console.log(person1.address.state);


// //accessing the properties using Brackets operator 

// console.log(person['name']);

// console.log(person1['address']['state']);

// //............Array-list of Item........//

// let selectedColours =['red','green'];
// selectedColours[2]=1;
// console.log(selectedColours);
// console.log(typeof selectedColours);
// console.log(selectedColours.length);

// selectedColours[4]="orange";

// console.log(selectedColours);


// //..............Function.............//

// function greet(){
//     console.log("Hello world");
// }
// greet();//calling function

// //.........function with a parameter......//

// function greet1(name){
//     console.log("Hello "+name);
// }
// greet1("Vishwas");//calling function with argument.

// let greeting=greet1;// Function Reference
// console.log(greeting);

// let greeting1=greet1("Vishwas");//function call with argument.
// console.log(greeting1);




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //...................................................5/3/2021..................................................................................//////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Arithmetic Opertors

// let x=10;
// let y=3;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x ** y);//Exponentiation: x to the power of y

// //..................Increment Operator(++)(x+1).....................

// console.log(++x); //Increment first and then displays--> pre-Increment

// console.log(x++)  //Displays first and then Increment-->post-Increment

// //.............Decrement Operator(--)(x-1)...........................

// console.log(--x); //Decrement first and then displays--> pre-Decrement

// console.log(x--)  //Displays first and then Decrement-->post-Decrement

// //................Assignment Operator.................................
// let x=10;
// console.log(x+=5);//x=x+5

// console.log(x-= 5); //x = x-5

// console.log( x *=5 ); // x=x*5

// console.log( x /=5 ); // x=x/5

// console.log( x %=5 ); // x=x%5

// //................Relation Operator.....................................

// //out put will be in boolean 

// console.log(x>y);
// console.log(x<y);
// console.log(x <= y);
// console.log(x>=y);

// //..................Equality Operations.............................

// console.log(x===x);

// console.log(x==x);

// console.log(x!=x);

// //....................Ternary Operator..............................

// //condition ? Statement1 : statement2;

// let points=101;

// let customer= points > 100 ? 'Gold' : 'Silver';

// //....................Logical Operators.............................

// //Logigal AND(&&) - Return true if both the operands are true

// console.log(true && true)//true
// //everything else is false.....

// let highIncome=true;
// let goodCreditScore=true;
// let eligibleForLoan=highIncome && goodCreditScore;
// console.log("eligible for loan :",eligibleForLoan);

// //---------------------------------------------------------------------------------------------
// //Logigal OR(||) - Return true if any one of the operands is true

// console.log(false || false)//false
// //everything else is true.....

// highIncome=true;
// goodCreditScore=true;
// eligibleForLoan=highIncome || goodCreditScore;
// console.log("eligible for loan :",eligibleForLoan);
// //-----------------------------------------------------------------------------------------------

// //logical NOT(!) - Returns true if the value is false, return false if the value is true

// console.log(!true)//false
// console.log(!false)//true

// highIncome=false;
// goodCreditScore=false;
// let applicationRefused

// eligibleForLoan=highIncome || goodCreditScore;
// console.log("eligible for loan :",eligibleForLoan);

// applicationRefused=!eligibleForLoan;
// console.log("Application Refused", applicationRefused);

// //------------------------------------------------------------------------------------------------
// //logical operators will not always be boolean 

// console.log(false||'Vishwas');
// console.log(false||1);


// // Expected Out Put of falsy 
// // undifined
// // NaN
// // null
// // 0
// // false

// //Anything other than falsy is truthy
// let x=10;
// //console.log(false && ++x)
// console.log(x);



// console.log(false||1||2); //Short-circuting



// //.....................Bit-wise Operators..................................................

// //Precedence of Operators
// let x=2+3*4;
// console.log(x);

// x=(2+3)*4;
// console.log(x);

// //Precedence
// //()
// //*
// // /
// // +,-


// //////////////////////Assignment////////////////

// let a="red";
// let b='blue';
// console.log(a);
// console.log(b);
// let temp=a;
// a=b;
// b=temp;





// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////// 8-3-2021 /////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// //if Hour is between 6am to 1pm: Good Morning!
// //if Hour is between 12pm to 6pm: Good Afternoon!
// //Otherwise: Good Evening!

// // // If there is only one statement 
// // if (condition)
// // statement

// // // If there are multiple statements 
// // if (condition){
// // statement
// //  }



// let hour =19;

// if(hour>=6 && hour< 12)
//     console.log("Good Morning");
// else if(hour >= 12 && hour < 18)
//     console.log("Good Afternoon");
// else
//     console.log("Good Evening");


// //Switch Case Statement

// //role of the current user
// //Check whether the current logged  in user is guest, moderator or admin

// let role= 'guest';

// switch(role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
// //     default :
// //         console.log('Admin User');
// // }

// // //if...else
// // if(role==='guest')console.log("Guest User");
// // else if (role==='moderator') console.log("Moderator User");
// // else console.log('Admin User');




// // // Loops

// // //For 
// // //while 
// // //Do...while
// // //for....in
// // //for....of

// // // syntax:-  for(InitialExpression; Condition; Increment)

// // for(let i=0;i<5;i++)
// // console.log(i);

// // //Even Numbers 

// // for(let i=0;i<=10;i++){
// //     if(i % 2 === 0) console.log("Even Number",i);

// // }

// //Even Numbers in revers order
// // for( i=10 ; i>=0;i-- ) 
// //     if(i % 2 === 0) console.log("Even Number",i);


// //While (condition) Statement {} - Multiple Statements
// // the condition will be evaulated, if that condition is true then control goes inside 

// // let i=0;
// //  while (i<= 10){
// //      if(i % 2 ==0) console.log(i);
// //      i++;
// //  }

//  //Do....While 
//  // Always execute the block of code at least once even if the condition is false

// //  do{
// //      if (i % 2 === 0) console.log(i);
// //      i++;
// //  }while(i<=10);

// // Infinite loops




// //for...in
// // Syntax: (let <variableName> in <object>) 
// // const person = {
// //     name: "Vishwas",
// //     phone: 8073528197
// // };

// // for(let key in person)// Key variable will hold the property of an object
// // console.log(key);

// // for(let kry in person)
// // console.log(key,person[key]);

// // const colors = ['red','Green',"blue"];

// // for (let index in colors)
// // console.log(index, colors[index]);

// // //For...of
// // for(colors of colors)
// // console.log(colors);//no need to pass the index value like we did in for....in loop

// // //Break and Continue

// // // Break 
// // let i=0;
// // while(i<=10){
// //     if(i==5)  break;

// //     console.log(i);
// //     i++;
// // }

// // //Continue-Jump to the begining of the loop and starts executing 

// // while(i <= 10 ){
// //     if(1%2===0){
// //         i++;
// //         continue
// //     }
// //     console.log(i);
// //     i++;
// // }


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //--------------------------------9-3-2021---------------------------------------------------------------------

//Objects

// let x=1;
// let y=1;
// let radius=1;

// //Objects are collection of key value pair

// //Group related objects

// //Syntax of object

// const circle = {
//     radius: 1, //any data type
//     location: {
//         x: 1,
//         y:1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// //If a function is part of an object, we call that as a method.

// circle.draw(); // Method



// //Factory function

// function createCircle(radius){
//     const circle = {
//         radius,
//         location:{
//             x: 1,
//             y:1
//         },
//         isVisible: true,
//         draw: function(){
//             console.log('draw');
//         }
//     };
//        return circle;
// }


// console.log(createCircle(1));
// console.log(createCircle(2))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Pattern of creating Object - Factory function 
//camel Notation : oneTwoThreeFour - factory functions
//Pascal Notation : OneTwoThreeFour - Constructor function

// Constructor Function - Create/Construct an object

function Circle(radius){
    this.radius = radius;//'this create reference to an empty object
    this.draw=function (){
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(circle);

//Dynamic Nature of the objects

let circle={
    radius:1
};
//circle = {};//we should not reassigne the object, but we can add or remove properties or function from the function

circle.color='red';
delete circle.radius;

console.log(circle);
//creating object 
const myCircle = createCircle(1);
console.log(myCircle.constructor);

const circle = new Circle(1);
console.log(circle.constructor);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//functions are objects 

const Circle1=new Function('radius',`this.radius = radius;
                                     this.draw = function(){
                                         console.log("draw');
                                     }`
);



//differcnt ways of calling functions 









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//values type Vs Reference Type

//copy by values - Primitive Data Type
let a=10;
let b=x;

x=20;
console.log(x,y);


//copy by reference - 

let a={value:10};
let b=a;

//a.value=30;

console.log(a.value);
console.log(b.value);

//primitive are copied by their value
//Reference are copied by their reference 

//Enumerating Properties of an Object

const circle ={
    radius : 1,
    draw(){
        console.log('draw');
    }
};

for(let key in circle)
    console.log(key, circle[key]);

for(let key of Object.keys(circle))//Gives the values of properties of an object
    console.log(key);

for(let entry of Object.entries(circle))//displays properties and the values in an array 
    console.log(entry);

if('radius' in circle )
    console.log('YES');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Cloning an object
//Copying all the properties and functions of an object to another

const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
};

const person = {
    name:"Vishwas"
};

//--------------------------------------------------------------
//Traditional way of cloning an object 

const anotherCircle = {};//create empty object

for (let key in circle)
    anotherCircle[key]=circle[key];

//------------------------------------------------------------
//Coping each and every property individually

anotherCircle['radius']=circle['radius'];
console.log(anotherCircle);

//------------------------------------------------------------
//Uasing Object.assign({},source_objectName)

const anotherCircle=Object.assign({},circle);//create and iterate
const anotherCircle=Object.assign({},circle,person);//create and iterate

const anotherCircle = Object.assign({
    city:'Bengaluru'
},circle);
console.log(anotherCircle);

//--------------------------------------------------------------
//Spread Operator

const anotherCircle={...circle};
console.log(anotherCircle);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Garbage Collection

//Js Engine will garbage collector
//automatically allocates and deallocates the memory, user we don't have control

let circle={};
console.log(circle);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Math

console.log(Math.random());

console.log(Math.floor(Math.random()));

console.log
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//String 













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Template literals

//Const message ='this is my first message';
console.log(message);

let name ='Vishwas';

const message2=`Hi ${name}, calculation ${2+3}`;
console.log(message2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Date

const date1= new Date('jan 12 2021 09:00');
console.log(date1);

const now = new Date();

const date2 = new Date(2021,1,12,0);
console.log


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////10-3-2021///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Functions are Objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('Draw');
    }
}

//constructor property will convert function into objects internally

//Circle()

Circle.call({},1)//Single parameter
Circle.call({},1,2)//Multiple parameters
Circle.apply({},[1,2,3])//call and apply method are same, but apply accepts arguments in an array
//if we use methods no need to write new keyword to create object 

 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-----------ARRAY-------------------

//Adding Element 
const numbers=[1,2,3];
//number=[];//cannot reassign due to const keyword but we can add/modify/delete elements

//Add elements at the beginning of the array
numbers.unshift(1);
console.log(numbers);

//Add element at the end of the array 
numbers.push(5);
console.log(numbers);

//Add element at the middle of the array 

//number.splice(startingposition, delete count, element to be added)

//number.splice(2,0,"a","b");
//console.log(numbers);

numbers.splice(2,2,"a","b");
console.log(numbers);

//---------------------------------------------------------------------------

//Finding Element(s) - Premitive Type

const numbers=[1,2,3,4];

numbers.indexOf(3);// if the element exists, it gives index else it will return -1
console.log(numbers.indexOf(3)); // output:2

console.log(numbers.indexOf("a")); //-1 because a is not present in number array

const number2=[1,2,3,1,4];
//consle.log(numbers2.lastIndexOf(1)); //-1 because a is not there in numbers array2

//Console.log(numbers2.indexOf(1) !== -1); //true
//console.log(numbers2.includes(1)); //same as above 

console.log(number2.indexOf(3,3));

//Finding Element(s) - Reference Types

const courses = [
    {id:1,name:'a'},
    {id:2,name:'b'},
];

console.log(courses.includes({id:1,name:'a'}));
//argument Object has a different memory location compared to the object present in course array 

const course = courses.find(function (obj) {
    //return coures.name=='a'; //out put : full object structure
    return obj.name == 'xyz'; //Out Put : undifined
}); //courses object is passed to the function with obj reference , it is known as call back functions

console.log(course);

//Arrow Fumctions

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////11-3-2021///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//combining and slicing/spliting Array

const first=[1,2,3];
const second=[4,5,6];

const combined=first.concat(second);
const combined=second.concat(first);

console.log(combined);

//slice
//1st way 
//combined.slice(start,finish - 1);

const first=[1,2,3];
const second=[4,5,6];

const combined=[...first,...second];
console.log(combined);


//Itterating

const first=[1,2,3];
//one way
//for(let number of numbers)
//console.log(Number);

//second way
// number.forEach(function(number)){
// console.log(number);
//});

//using arrow function
//numbers.forEach((number,index)=>console.log(index,number));

///////////////////////////////////////////////////////////////////////

//join 
const first=[1,2,3];
const joined=first.join(',');//Return string
console.log(joined);

//split
const message='This is my first message';
const parts=message.split(' ');//Return array
console.log(part);

/////////////////////////////////////////////////////////////////////////

//slug

const combined=parts.join('-');
console.log(combined);

/////////////////////////////////////////////////////////////////////////

//Sorting arrays

const numbers=[3,1,2];

const sorted=numbers.sort()//default is asceding order
console.log(sorted);

//reversing

const reversed=sorted.reverse();
console.log(reversed);//reverse the given array

//sorting the object

const courses = [
    {id:1,name:'node.js'},
    {id:1,name:'JavaScript'}
];
const sortedcourse=





