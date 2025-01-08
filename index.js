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

// <!-- counter program -->

const increasebtn= document.getElementById("incbtn");
const reset=document.getElementById("reset");
const decreasebtn= document.getElementById("decbtn");
const countlabel=document.getElementById("countval")
let count=0;
increasebtn.onclick=function(){
    count++;
    countlabel.textContent= count;
}
decreasebtn.onclick=function(){
    count--;
    countlabel.textContent= count;
}
reset.onclick=function(){
    count=0;
    countlabel.textContent= count;
}

// <!-- random number generator -->

let min=1;
let max=6;
const valuenum= document.getElementById("valuenum");
const valueadd= document.getElementById("valueadd");
let randomnum;
valuenum.onclick= function(){
   randomnum = Math.floor(Math.random() * max ) + min;
   valueadd.textContent = randomnum;
}


// <!-- if else condition -->
const ageval = document.getElementById("ageval");
const mysubmitval = document.getElementById("mysubmitval");
const valuetxt =  document.getElementById("valuetxt");
let age;
mysubmitval.onclick= function() {
    age= ageval.value;
    age= Number(age);
    if(age <= 17){
        valuetxt.textContent =`you are not visit this site`;
    }
   
    else if(age == 0){
        valuetxt.textContent =`you must be 18+ to visit this site`;
    }
    
    else{
        valuetxt.textContent =`welcome to site`;
    }
   
}

// <!-- checked property -->

const checkbox= document.getElementById("checkbox");
const visacard= document. getElementById("visacard");
const mastercard= document. getElementById("mastercard");
const debitcard= document. getElementById("debitcard");
const submittext= document. getElementById("submittext");
const subresult= document. getElementById("subresult");
const paymentresult= document. getElementById("paymentresult");

submittext.onclick=function(){

    if(checkbox.checked){
        subresult.textContent= `you are subscribe`;
    }
    else{
        subresult.textContent= `you are not subscribe`;
    }

    if(visacard.checked){
        paymentresult.textContent= `you are paying Visa Card`;
    }
    else if(mastercard.checked){
        paymentresult.textContent= `you are paying Master Card`;
    }
    else if(debitcard.checked){
        paymentresult.textContent= `you are paying Debit Card`; 
    }
    else{
        paymentresult.textContent= `you must select payment type`; 
    }
}