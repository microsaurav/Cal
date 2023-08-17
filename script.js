let string = "";
function calc() {
  string = eval(string);
  document.querySelector("input").value = string;
}
function updateResult() {
  try {
    calc();
  } catch (err) {
    console.log(err);
  }
}

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      calc();
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
      updateResult();
    }
  });
});

const input = document.getElementById("input");
const output = document.getElementById("result");


function appendToInput(value){
  input.value+=value;

}

function clearInput(){
  input.value = "";
  output.textContent  = "";
}


function updateResult() {
  try {
    const inputField = input.value;
    const result = eval(inputField);
    output.textContent = result;
  } catch (err) {
   output.textContent='';
  }
}