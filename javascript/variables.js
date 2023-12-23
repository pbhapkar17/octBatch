// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically(var-default)
// Using var
// Using let
// Using const

// let/var/const vN = value;

const marks = 50;
console.log(marks);

marks1= 90;

let name ; //declaration
console.log(name);
name = "poonam" ; //defanition
console.log(name);

let sName = "Patil"  //dclr + def

let empAge = 90;

//let var const difference
// let: block level scop 
// var :fun level scop
function test() {
    let a = 40;
    var b = 5
    if (a > 20) {
        let b1 = 5;
        console.log(b);
    }
    console.log(b);
    let c = a / b;
    console.log(c);
}

//redeclaration of variable is possible with var keyword not wit let keyword
// let a1 = 12;
// let a1 = 40;

var b1 = 33;
var b1 = 30;
console.log(b1);


//hoisting possible with var keyword not possible with const/let

// t = 60;
// let t;

t = 60;
var t;
console.log(t);

// j =80;
const j = 60;

//reassigning value is possible with let and var but not possible with const
let d = 60;
d = 90;
console.log(d);

var y = 62;
y = 30;
console.log(y);

const g = 30;

g = 90;
console.log(g);