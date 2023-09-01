let string = "";
const input = document.getElementById("input");
const output = document.getElementById("result");

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
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "=") {
      calc();
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    }
    else if(e.target.innerHTML=="%"){
  

      output.textContent = output.textContent/100;
      // hello
    }
    
    else {
      console.log(e.target);
      console.log(e.target.innerHTML);
      if(string.length>1){
      let string1 = string.slice(-1);

      console.log(string1);
      if(string1===e.target.innerHTML && (string1==="*"|| string1==="/"||string1==="+"|| string1==="-" || string1===".") )
      {
      // if(string1===e.target.innerHTML){
        
        string = string;

      }
      else if((e.target.innerHTML==="*" || e.target.innerHTML==="+" || e.target.innerHTML==="/"||e.target.innerHTML==="-"|| e.target.innerHTML===".") && (string1==="*"|| string1==="/"||string1==="+"|| string1==="-" || string1===".")){
        string=string;
      }

      else{
        string = string + e.target.innerHTML;
        console.log(string);
        document.querySelector("input").value = string;
        console.log(document.querySelector("input").value);
      }
    }

      else{
        string = string + e.target.innerHTML;
        console.log(string);
        document.querySelector("input").value = string;
        console.log(document.querySelector("input").value);
      }
    
      // string = string + e.target.innerHTML;
      // console.log(string);
      // document.querySelector("input").value = string;
      // console.log(document.querySelector("input").value);
      
      updateResult();
    }
  });
});



// function appendToInput(value){
  
//   // input.value+=value;
//   console.log(value);
//   console.log(input.value.includes(value));
//   if(input.value.includes(value)){
//     input.value;
//   }
//   // else{
//   //   input.value+=value;
//   // }
//   console.log(input.value);

// }

function clearInput(){
  input.value = "";
  output.textContent  = "";
}


function updateResult() {
  // try {
    
    const inputField = input.value;
    console.log(inputField);
   
    
    if(inputField.includes( "/0")){
      string = "Cannot be divided by zero";
      output.textContent = string;
    }
    else{
    const result = eval(inputField);
    output.textContent = result;
    }
  // } 
  // catch (err) {
  //  output.textContent= '';
  // }
}
