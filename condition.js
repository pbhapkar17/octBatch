
var marks = 85;

//if
if ( marks > 75 ) {
    console.log("Distinction");
}

//if else
if (marks > 35) {
    console.log("Pass...");
} else {
    console.log("fail");
}

//else if : multiple , 
if (marks >= 75) {
    console.log("disti");
} else if(marks >= 60 && marks < 75) {
    console.log("first cls");
} else if(marks >= 50 && marks < 60) {
    console.log("sec cls");
} else if(marks >= 35 && marks < 50) {
    console.log("passed");
}
else {
    console.log("fail");
}