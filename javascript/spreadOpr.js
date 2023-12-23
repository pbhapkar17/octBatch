//sp opr : [...]:The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

let  numbers = [1, 2, 3, 4, 5, 6];
let no2 = [...numbers]
console.log(no2);


let[no3,no4, ...no5] = numbers;
console.log(no3);
console.log(no4);
console.log(no5);

let a =[11,33,44,45];
let b = [5,6,7,8,9];
let c = [...a, ...b];
console.log(c);


let obj = { name:"poonam", age:99, city:"pune",state:'mh'} 
let obj1 = {...obj}
console.log(obj1);

let obj2 = { name:"om", age:44, city:"pune"} 

let obj3 = {...obj , ...obj2}
console.log(obj3);