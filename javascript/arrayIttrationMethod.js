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
    },
    {
        name: "ritu1", city: "mumbai"
    },
    {
        name: "ritu2", city: "mumbai"
    }
]

let names = [];
for (let index = 0; index < a.length; index++) {
    if(a[index].name =="ritu"){
        break;
    }
    names.push(a[index].name)  
}
console.log(names);
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

let val = a.find(ele=>{
   return ele.name == 'ritu1'
})
console.log(val);