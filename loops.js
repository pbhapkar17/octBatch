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
for(let r = 2 ; r < color.length ; r++){
     if(color[r] != 'blue'){
       color1.push(color[r])
     }
}

console.log(color1);

//for of loop
//array ind starts with= 0 ,len starts with =1
let color2 = ['red','blue','black','pink'];
let clr=[]
for( let x of color2){
   clr.push(x)
}
console.log(clr);


let color3 = ['red','blue','black','pink','red11','blue1','black1','pink1'];
let clr2 = [];

for(let ind = 2 ; ind < color3.length ; ind++){
  if(color3[ind] != 'black' && color3[ind] != 'blue1' && color3[ind] != 'pink1'){
          clr2.push(color3[ind]);
  }
}
console.log('clr2',clr2);

//for in loop:: obj
stud = {
  name:'poonam',
  age:30,
  mobno:898989,
  city:"mumbai"
}

for(let a in stud){
  console.log(a);
  console.log(stud[a]);  //stud[name]>>poonam
}
