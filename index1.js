const subcribe= document.getElementById("subcribe");
const visacard= document.getElementById("visacard");
const mastercard= document.getElementById("mastercard");
const debitcard= document.getElementById("debitcard");
const submittext= document.getElementById("submittext");
const subresult= document.getElementById("subresult");
const paymentresult= document.getElementById("paymentresult");

submittext.onclick= function(){
    if(subcribe.checked){
        subresult.textContent=`you are subscribe`;
    }

    else{
        subresult.textContent=` you are not subscribe`;
      }
        if(visacard.checked){
            paymentresult.textContent=`you are selected visacard`;
        }
        else if (mastercard.checked){
            paymentresult.textContent=`you are selected mastercard`;

        }
        else if (debitcard.checked){
            paymentresult.textContent=`you are selected debitcard`;

        }
        else{
            paymentresult.textContent=`you are not selected any payment method`; 
        }


}

// loop

for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
  }

  let i = 0;
while (i < 5) {
  console.log("Iteration number: " + i);
  i++;
}
// logic operator

let a = true;
let b = false;

console.log(a && b);  // false because both are not true
console.log(true && true);  // true
console.log(false && true);  // false


let c = true;
let d = false;

console.log(c || d);  // true because at least one is true
console.log(false || false);  // false
console.log(true || false);   // true

  

