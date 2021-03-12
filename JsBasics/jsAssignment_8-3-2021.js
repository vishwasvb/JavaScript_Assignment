//Assignment-1  FizzBuzz

// function fizzbuzz(num){
//     if((num % 3 == 0)&&(num % 5 == 0))
//         console.log("FizzBuzz....");
//     else if(num % 3 == 0)
//         console.log("Fizz");
//     else if(num % 5 == 0)
//         console.log("Buzz");
//     else if(typeof num != 'number')
//         console.log("Not a Number");
//     else
//         console.log("Number is :",num);
// }
// fizzbuzz(19);

//----------------------------------------------------------------------------------

//Assignment-2  finding grade

// const array=[86,88,92,98];
// let arrayLength=array.length;
// let sum=0;

// function findGrade(array){
//     for (let val of array)
//     sum+=val //[index];
//     let avg=sum/arrayLength;

//     if(avg>=1 && avg<=59)
//         console.log("Grade : F");
//     else if(avg>=60 && avg<=69)
//         console.log("Grade : D");
//     else if(avg>=70 && avg<=79)
//         console.log("Grade : C");
//     else if(avg>=80 && avg<=89)
//         console.log("Grade : B");
//     else if(avg>=90 && avg<=100)
//         console.log("Grade : A");
// }

// findGrade(array);

//------------------------------------------------------------------------------------------------------
//Assignment-4 prime number

function showPrime(limit){
    for(let i=1;i<=limit;i++){
        let flag=0;

        for(let j=2;j<i;j++){
            if((i % j) == 0){
                flag=1
                break;
            }
        }

        if(i>1 && flag == 0){
            console.log(i);
        }
    }
}
showPrime(25);
