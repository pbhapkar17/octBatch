// data types:1. Primitive Data type 2. Nonpremitive
//  The Primitive Data types: single value holder-- in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.
// Number
// String
// Boolean
// Undefined
// Null
// Symbol
//2.nonpremitive: // Object

//number : whole no or decimal no
let amount = 98.9898; //5655656

//typeOf(): is used to get data type of data

console.log(typeof(amount));

//string dt : ''/""
let city = 'mumbai';
console.log(typeof(city));

//Boolean: true/false
let isFavMovie = false //"true";//string
console.log(typeof(isFavMovie));

//undefined
let a ;
console.log(a);
console.log(typeof(a));

let b = "undefined";
console.log(b);
console.log(typeof(b));

//var false = "poonam" // we can not declare reserved keywords as a variable name

let r = "none" //string

let c = null;
console.log('c',typeof(c));
document.write(c,'<br>')

let cash = BigInt("9999999999999999");  //1.36656 //1.37
document.write(cash,'<br>')

var stdName = "Pooja, om"

//array: []: listing >>hetrogenous array 

let colors=['red','orange','black'];//homogenous arr


document.write("colors >> ",colors)
document.write("studentNames >> ",studentNames)
console.log(studentNames);


function test(){
   return 50*20;
}

var studentNames = ["pooja","om",400,true,"pravin","jiya",test()]//hetro


let colors2 = ['red','orange','black',"yellow"];

document.write("<br>",colors2[6])

let cars = []; //empty array
console.log("cars>>",cars);

//length operator: it gives length of array or string

console.log(colors2.length);

//object: {key : value}
let std = { name: "pooja" , age:20, city:"pune"};
let emp = {} ; //empty obj
console.log(std.city);

//array of obj
let std2 = [
   { name: "pooja" , age:20, city:"pune"},
   { name: "om" , age:30, city:"satara"},
   { name: "shri" , age:22, city:"pune"}
]

console.log(std2[0]);

console.log(std2[0].age);
console.log(std2.length);