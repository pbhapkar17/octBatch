let text = "poonam    hjbjb nxjsbx";
console.log(text.length);

let text1= "i like mango";
console.log(text1.slice(1,6)); //start ind:including end ind:exclusive

console.log(text1.slice(1));

console.log(text1.slice(-6,-1)); //-6 is exclusive, -1 inclusive

console.log(text1.substring(-5,9));//neg index will treated as 0 here
 console.log(text1.substr(4,6));//end index will consider here as a length

//  The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

var details = "Mumbai is metrocity.mumbai i like mumbai";
console.log(details.replace("mumbai","pune"));
console.log(details.replace(/mumbai/g,"pune"));
console.log(details.replace(/mumbai/i,"pune"));
console.log(details.replace(/mumbai/ig,"pune"));

//replaceAll
console.log(details.replaceAll("mumbai","ppppp"));
console.log(details.replaceAll(/mumbai/ig,"ppppp"));

console.log(details.toUpperCase());
console.log(details.toLowerCase());

//concate

let a = "pooja";
let b = "jadhav";
//let fullName = a.concat(b);
let fullName = a.concat(' ',b);
console.log('n>>',fullName);

let text3 = "      Hello    World!      ";
let text2 = text3.trim();
console.log(text2);

console.log(text3.trimEnd());
console.log(text3.trimStart());

let myBDate= "04/04/1992";
var year = myBDate.split("/");
console.log(year);
console.log(year[2]);