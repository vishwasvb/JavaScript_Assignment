//Assignnment-1  Create object Address


// const address = {
//     street:45,
//     city:'Bengaluru',
//     zipCode:560004,
//     showAddress:function(){
//         for(let key in address)
//             console.log(key+":"+address[key]);
//     }
// };

// address.showAddress();

//---------------------------------------------------------------------------------------------------

//Assignment-2   Create object using Factory Function


// function createAddress(street,city,zipCode){
//     const address = {
//     street,
//     city,
//     zipCode,
//     showAddress:function(){
//         for(let key in address)
//             console.log(key+":"+address[key]);
//         }
//     };
//     return address;
// }

// const vishwasAddress=createAddress('b cross','Bengaluru',560026);
// const vikasAddress=createAddress(5,'DBpura',560060);
// vishwasAddress.showAddress();
// vikasAddress.showAddress();

//---------------------------------------------------------------------------------------------------

//Assignment-3  Create object using constructor

// function Address(street,city,zipCode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;

//     this.showAddress=function (){
//         for(let key in address)
//             console.log(key+":"+address[key]);
//     }
// }

// const vishwasAddress = new Address('b cross','Bengaluru',560026);
// console.log(vishwasAddress);

//----------------------------------------------------------------------------------------------------------------------------

//Asignment-4  Create Blog Post object

// const blogPost = {
//     title:'Java Script',
//     body:'Java Script is a Dynamic language, It runs in js engine',
//     author:'Vishwas',
//     views:0,
//     comments:{commentAuthor:'Shiva',
//               commentBody:'V8 is the Js engine in chrome '},
//     isLive:true,
//     display: function(){
//         for(let key in blogPost){
//             console.log(key+":"+blogPost[key]);
//         }
            
//     }
// };

// blogPost.display();

//---------------------------------------------------------------------------------------------------------------------------------
//Factory function using arrow function

// let createAddress=(street,city,zipCode)=>{
//     const address = {
//     street,
//     city,
//     zipCode,
//     showAddress:function(){
//         for(let key in address)
//             console.log(key+":"+address[key]);
//         }
//     };
//     return address;
// }
    
// const vishwasAddress=createAddress('b cross','Bengaluru',560026);
// const vikasAddress=createAddress(5,'DBpura',560060);
// vishwasAddress.showAddress();
// vikasAddress.showAddress();
    
//-----------------------------------------------------------------------------------------------------------------------------
//constructor function using arrow function

let Address=(street,city,zipCode)=>{
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    
    this.showAddress=function (){
        for(let key in address)
            console.log(key+":"+address[key]);
    }
}
    
const vishwasAddress = new ('b cross','Bengaluru',560026);
console.log(vishwasAddress);
