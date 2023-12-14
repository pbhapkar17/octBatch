console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");

// for(s1;cond;inc/dcr){
//code block
// }

let x = 10;
// x = x + 1;
x++; //++ increament operator

// x = x-1;
//x--; //decreament operator
console.log(x);


for ( let a = 1 ; a<=10; a++ ){
    console.log(a);
}

let color = ['red','blue','black','pink'];
let color1 = [];
for(let r = 0 ; r < color.length ; r++){
     if(color[r] != 'blue'){
       color1.push(color[r])
     }
}

console.log(color1);