let fnc=function sayHello() {
    console.log("Hello JavaScript!");
}
fnc();




let sum=function add(a,b){
    return a+b;
}
let result=sum(5,10);
console.log(`Sum of 5 and 10 is ${result}`);



let greet=function greeting(name="Guest"){
    console.log(`Hello, ${name}!`);
}
greet("akki");


function allSum(...numbers){
    let sum=0;
    numbers.forEach(function(val){
        sum+=val;
    });
    return sum;
}
let total=allSum(1,2,3,4,5);
console.log(`Total sum is ${total}`);


//iife
(()=>{
    console.log("main hu iife aur main immediately run krrta hu!");
})();

//closure
function outerFunction(){
    let abc=10;
    function innerFunction(){
        console.log(`Value of abc is ${abc}`);
    }
    innerFunction();
}

outerFunction();




let obj={
    name:"ajju",
    age:25,
    city:"pune"
}
console.log(`Name is ${obj.name}, Age is ${obj.age}, City is ${obj.city}`);

for(let key in obj){
    console.log(obj[key]);
}



let tout=setTimeout(()=>{
    console.log("Time's up!");
},2000);
clearTimeout(tout); //cancel timeout


//level 2

function runTwice(fn){
    fn();
    fn();
}

function helper(){
    console.log("Function executed");
}

runTwice(helper);


let a=10;
function pure(val){
    return val*2;
}
console.log(`Pure function result ${pure(a)}`);
console.log(`Pure function result ${pure(a)}`);
console.log(`Pure function result ${pure(a)}`);

function impure(){
    a=a+5;
    return a;
}

console.log(`impure function result ${impure()}`);
console.log(`impure function result ${impure()}`);
console.log(`impure function result ${impure()}`);

function printObj({name,age}){
    console.log(`Name is ${name}, Age is ${age}`);
} 
let obj1={
    name:"nikki",
    age:22
};

printObj(obj1);



let arr=[1,2,3,4,5];
let sqArr=arr.map((val)=>{
    return val*val;});
console.log(`Original array: ${arr}`);
console.log(`Squared array: ${sqArr}`);


let arr2=[10,20,8,81,7,45,96,84,85,85,23,21,26,6,9,3,1];
let filterArr=arr2.filter((val)=>{
     return val%2===0;
})
console.log(`Original array: ${arr2}`);
console.log(`Filtered even array: ${filterArr}`);
arr2.sort();
console.log(`Sorted array: ${arr2}`);



let sal=[100,5000,8222,95620,59620];
let totalSal=sal.reduce((total,current)=>{
    return total+current;
});
console.log(`Total Salary is ${totalSal}`);


let names=["ajay","vijay","sanjay","rahul","deepak","ram","sam","vic"];
console.log(names.some((name)=>{
     return name.length>3;
     }))   // true
console.log(names.every((name)=>{
     return name.length>3;      //false
     }))
 


let user={
    name:"rohit",
    age:30,
    address:{
        city:"mumbai",
        pincode:400001
    }
}

Object.freeze(user);
user.age=31;    
user.address.city="bangalore";
console.log(user.age);//no change
console.log(user.address.city);//no change




let userObj={
    user:{
        name:"rahul",
        address:{
            city:"delhi",
            pincode:110001
        }
    }
}

console.log(userObj.user.address.city);
