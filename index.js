// Varibles 
// javascript declare varibles 4 ways
// Automatically

x=5;
y=6;
z=x+y;
document.getElementById("addnumber"). textContent="The value is z is " + z;

// Let
let a=5;
let b=6;
let c=a+b;
document.getElementById("addnumber"). textContent="The value is c is " + c;

// const
const d=5;
const e=6;
const f=a+b;
document.getElementById("addnumber"). textContent="The value is f is " + f;

// var is redeclare
var x=5;
var x=6;
var z=x+x;
document.getElementById("addnumber"). textContent="The value is z is " + z;


// Airthemetic operators

let result= 2 + 2 / 2 - 2 * 2;
console.log(result);

// <!-- submit form -->

let username;
document.getElementById("submit").onclick = function(){
  username=document.getElementById("mytext").value;
  console.log(username); 
}

// <!-- Calculate the circumstance -->

const PI = 3.453465;
let radius;
let circumstance;
document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("radval").value;
    circumstance= 2 * PI * radius;
    document.getElementById("showval").textContent = circumstance; 
}