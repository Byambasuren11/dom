// const text = document.createElement("p");
// text.innerHTML = "hello ";
// const newText =document.createElement("p");
// newText.innerHTML="world";
// document.querySelector("#game1").appendChild(text);
// //document.getElementById("game1").replaceChild(newText,text);
// const button=document.createElement("button");
// button.innerHTML="click me";
// document.getElementById("game1").replaceChild(button,text);
// document.getElementById("game1").addEventListener("click",myFunction);
// document.getElementById("game1").addEventListener("mouseenter",myFunction1);
// document.getElementById("game1").addEventListener("mouseout",myFunction2);
// function myFunction(){
//     alert("hello");
// }
// function myFunction1(){
// button.style.color="red";
// }
// function myFunction2(){
//     button.style.color="green";
//     }
const div1 = document.createElement("div");
div1.id = "log_in";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.gap = "30px";
div1.style.justifyContent = "center";
div1.style.alignItems = "center";

const log = document.createElement("h1");
log.innerHTML = "LOG IN ";
log.style.display = "flex";
log.style.justifyContent = "center";
log.style.alignItems = "center";
div1.appendChild(log);

const emailDiv = document.createElement("div");
emailDiv.id = "email";
const textToEmail = document.createElement("p");
textToEmail.innerHTML = "EMAIL";
emailDiv.appendChild(textToEmail);
// document.getElementById("game1").appendChild(div1);
const inputEmail = document.createElement("input");
inputEmail.type = "email";
//inputEmail.addEventListener("keydown", checkEmail);
// document.getElementById("email").appendChild(textToEmail);
inputEmail.placeholder = "enter email";
emailDiv.appendChild(inputEmail);

div1.appendChild(emailDiv);

const passwordDiv = document.createElement("div");
passwordDiv.id = "password";
const textToPassword = document.createElement("p");
textToPassword.innerHTML = "Password";
passwordDiv.appendChild(textToPassword);
const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.placeholder = "enter password";
passwordDiv.appendChild(inputPassword);

div1.appendChild(passwordDiv);
const enter = document.createElement("button");
enter.innerHTML = "submit";
enter.style.width = "100px";
enter.style.height = "30px";
enter.style.border = "1px";
enter.style.backgroundColor = "green";
enter.addEventListener("mouseenter", myFunction1);
enter.addEventListener("mouseout", myFunction2);
enter.addEventListener("click",checkEmail);
function checkEmail() {
    console.log(inputEmail.value);
    console.log(inputEmail.value.length);
    if (inputEmail.value.length == 0) {
        alert("enter email");
      }

      if(inputEmail.value.includes("@gmail.com")===true){
        alert("good")
      }
      else{
        
      }
    // for (let i = 0; i <= inputEmail.value.length - 1; i++) {
    //   if(inputEmail.value==="@"){
    //       alert("good");
    //   }
    // }
}

function myFunction1() {
  enter.style.backgroundColor = "red";
}
function myFunction2() {
  enter.style.backgroundColor = "green";
}
div1.appendChild(enter);

document.getElementById("game1").appendChild(div1);
//inputPassword.innerHTML="enter password";
// document.getElementById("password").appendChild(inputPassword);
