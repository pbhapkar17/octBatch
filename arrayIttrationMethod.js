//forEach 
let a = [
    {
        name: "poonam", city: "mumbai"
    },
    {
        name: "pooja", city: "mumbai"
    },
    {
        name: "ritu", city: "mumbai"
    }
]

let names = [];
// for (let index = 0; index < a.length; index++) {
//     names.push(a[index].name)  
// }


// a.forEach(item => {
//     names.push(item.name)
// })
// console.log(names);

// var n1 = a.map(element =>{
//    return element.name
// })

n2 = a.filter(ele=>{
    if(ele.name == "pooja"){
        return ele;
    }
})
console.log(n2);