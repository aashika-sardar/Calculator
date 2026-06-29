let output = document.getElementById("display");
// console.log(output);
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let add = document.getElementById("add");
let dot = document.getElementById("dot");
let sub = document.getElementById("sub");
let multiply = document.getElementById("mul");
let del = document.getElementById("del");
let equalsto = document.getElementById("equals");
let clear = document.getElementById("clear");
let sqrt = document.getElementById("sqrt");
let mod = document.getElementById("mod");
let divide = document.getElementById("divide");

let displaystring = "";
function addInput(number) {
  displaystring += number;
  output.value =  displaystring;
  cssMaintain(false);
}
zero.addEventListener("click", () => {
 addInput("0");
});
 
one.addEventListener("click", () => {
   addInput("1");
});
two.addEventListener("click", () => {
   addInput("2");
});
three.addEventListener("click", () => {
 addInput("3");
});
 
four.addEventListener("click", () => {
   addInput("4");
});
five.addEventListener("click", () => {
   addInput("5");
});
six.addEventListener("click", () => {
 addInput("6");
});
 
seven.addEventListener("click", () => {
   addInput("7");
});
eight.addEventListener("click", () => {
   addInput("8");
});
nine.addEventListener("click", () => {
   addInput("9");
});
add.addEventListener("click", () => {
   addInput("+");
});
dot.addEventListener("click", () => {
   addInput(".");
});
sub.addEventListener("click", () => {
   addInput("-");
});

multiply.addEventListener("click", () => {
    addInput("*");
});


del.addEventListener("click", () => {
  let displayArray = displaystring.split("");
  //   console.log(displayArray);
  displayArray.pop();
  displaystring = displayArray.join("");
  output.value = displaystring;
});

equalsto.addEventListener("click", calculation);

clear.addEventListener("click", () => {
  displaystring = "";
  output.value = displaystring;
});

sqrt.addEventListener("click", () => {
  addInput("√");
  equalsto.removeEventListener("click", calculation);
  equalsto.addEventListener("click", squareroot);
});

function squareroot() {
  cssMaintain(true);
  // console.log(displaystring);
  let displayArray = displaystring.split("");
  // console.log(displayArray);
  displayArray.shift();
  let actualNumberstring = displayArray.join("");
  // console.log(actualNumberstring);
  let actualNumber = parseInt(actualNumberstring);
  // console.log(actualNumber);
  let result = Math.sqrt(actualNumber);
  // console.log(result);
  displaystring = result.toString();
  output.value = displaystring;
  equalsto.removeEventListener("click", squareroot);
  equalsto.addEventListener("click", calculation);
}

divide.addEventListener("click", () => {
    addInput("/");
});
equalsto.addEventListener("click", () => {
    let result = eval(displaystring);
    displaystring = result.toString();
    output.textContent = displaystring;
});

mod.addEventListener("click", () => {
    addInput("%");
  
});


function cssMaintain(isResult) {
  if (isResult) {
    output.style.textAlign = "right";
  }
  else{
    output.style.textAlign = "right";
  }
}

function calculation() {
  if (displaystring.length > 0) {
    let result = eval(displaystring);
    console.log(result);
    output.value = result;
    displaystring = result;
    cssMaintain(true);
  }
}





