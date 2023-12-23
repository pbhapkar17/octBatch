const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

let arr = [100,300,303];
let arr1 = arr.toString()
console.log(arr1);

let color = ['red','blue','black'];
let popReturnedValue = color.pop();//pops out last element
console.log(popReturnedValue); //it will return deleted item
console.log(color); 

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let pushedReturnedValue = fruits1.push('papaya','mango') //The push() method adds a new element to an array (at the end)
console.log(pushedReturnedValue); //it will return length of original arr
console.log(fruits1);

const fruits2 = ["Banana", "Orange", "Apple", "Mango.."];
let shiftReturnedValue = fruits2.shift() //The shift() method deletes last element from array 
console.log(shiftReturnedValue); //it will return removed element
console.log(fruits2);


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let unshiftReturnedValue = fruits3.unshift("pinapple") //The unshift() method adds a new element to an array (at the start)
console.log(unshiftReturnedValue); //it will return length of original arr
console.log(fruits3);


console.log(fruits3.join(" "));

console.log(fruits2.concat(fruits3));

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];

delete fruits4[6];

console.log(">>>>>>>",fruits4);

const fruits5 = ["Banana", "Orange", "Apple", "Mango","Orange"];
fruits5.splice(2, 3, "Lemon", "Kiwi");
console.log(">>>>>>>",fruits5);


const fruits6 = ["Banana", "Orange", "Apple", "Mango","Orange"];

console.log(fruits6.slice(0,3));


//number methods

let a = 9090909;
let b = a.toString();

console.log(a.valueOf());

let x = 9.6566666;
let y = x.toFixed(3);
console.log(y);