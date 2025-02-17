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

let e = true;
let f = false;

console.log(!e);  // false because 'a' is true, and NOT makes it false
console.log(!f);  // true because 'b' is false, and NOT makes it true

// <!-- temperature converter -->

function convertTemperature() {
    const tempValue = parseFloat(document.getElementById('tempValue').value);
    const tempUnit = document.getElementById('tempUnit').value;
    let resultText = '';

    if (isNaN(tempValue)) {
      alert("Please enter a valid temperature value.");
      return;
    }

    switch (tempUnit) {
      case 'C':
        resultText = `
          <strong>${tempValue}°C</strong> is equal to:<br>
          ${(tempValue * 9/5) + 32}°F (Fahrenheit)<br>
          ${tempValue + 273.15}K (Kelvin)
        `;
        break;
      case 'F':
        resultText = `
          <strong>${tempValue}°F</strong> is equal to:<br>
          ${(tempValue - 32) * 5/9}°C (Celsius)<br>
          ${((tempValue - 32) * 5/9) + 273.15}K (Kelvin)
        `;
        break;
      case 'K':
        resultText = `
          <strong>${tempValue}K</strong> is equal to:<br>
          ${tempValue - 273.15}°C (Celsius)<br>
          ${(tempValue - 273.15) * 9/5 + 32}°F (Fahrenheit)
        `;
        break;
    }

    document.getElementById('result').innerHTML = resultText;
  }



  // loop function

  for (let i = 0; i < 5; i++) {
    console.log(i);
}

// calculator
const display = document.getElementById('display');

    function appendValue(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }



    // modular error handling
    class Person {
      constructor(name, age) {
          if (!name || !age) throw new Error("Name and age are required");
          this.name = name;
          this.age = age;
      }
  
      greet() {
          console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
      }
  }
  
  try {
      const user = new Person("Alice", 25);
      user.greet();
  } catch (error) {
      console.error(error.message);
  }
  


  // todolist

  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("todo-list").appendChild(li);

    taskInput.value = "";
}