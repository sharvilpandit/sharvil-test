//task-1
let arr=[0, 1, false, 2, undefined, '', 3, null];
     for(i=0;i<arr.length;i++){
        if(arr[i]==0 || arr[i]==false || arr[i]==undefined || arr[i]=='' || arr[i]==null){
        
        }
        else{
            console.log(arr[i],"is null filtered")
        }
     }

//task-2

let arr2=[100, 150, 85, 15, 52, 89];

for(i=0;i<arr2.length;i++){
    if(arr2[i]<100){
        console.log(arr2[i],"is number filtered")
    }
}
//task-3
function compare(){
    console.log("comparison")   
    let a1=[5,10,15,20,25];
    let a2=[5,10,15,20,25];
    if(a1.length===a2.length){
        console.log("length matched")
       const result=JSON.stringify(a1)==JSON.stringify(a2);
       console.log(JSON.stringify(a1))
       console.log(JSON.stringify(a2))
       if(result){console.log("matched")}
       else{console.log("not matched")}
    }
}
compare();
//task-4
let spar=[10,20,15,5,25];

const n = 2
const result = [[], []] //we create it, then we'll fill it

const divide = Math.ceil(spar.length / 2)
console.log(divide,"ceil")

for (let line = 0; line < n; line++) {
  for (let i = 0; i < divide; i++) {
    const value = spar[i + line * divide]
    if (!value) continue //avoid adding "undefined" values
    result[line].push(value)
  }
  console.log(result[line])
}

//task-5
let a1=[5,10,15,20,25];
let a2=[5,10,15,20,25,30,60,90];
let a3=[];
a3= a1.concat(a2);
console.log(a3,"cloned")

//task-6

let words=["Hi", "Hello", "World", "Javascript"];
let string=words.toString()
let stringpos=words.toString().replaceAll(',','+')
console.log(string);
console.log(stringpos);

//task-7

let array=[1,5,6,7];
let sumarr=array.map ( x => x*x )
let total=0;
for(values of sumarr){
    total=total+values
}
console.log(total,"total");

//task-8

let data={
    "Dogs": [
        {
            "category": "Companion dogs",
            "name": "Chihuahua"
        },
        {
            "category": "Hounds",
            "name": "Foxhound"
        }
    ],
    "Cats": [
        {   
            "category": "Companion dogs",
            "name": "Chihuahua"
        },
        {
            "category": "Hounds",
            "name": "Foxhound"
        }
    ]
  }
  console.log(data);

  let cat=[];
  let dog=[];
for(values of data.Cats){
   
    if (values.category=="Companion dogs"){
        dog.push(values.name)
    }
    else{
        cat.push(values.name)
    }
}
for(values of data.Dogs){
    if (values.category=="Companion dogs"){
        dog.push(values.name)
    }
    else{
        cat.push(values.name)
    }
}
console.log(cat,"are cats")
console.log(dog,"are dogs")