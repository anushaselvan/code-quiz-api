var startButton = document.querySelector(".start-Button");
var text =  document.querySelector("#main");

var isWin = false;


var question1 = "Which of the following is not a Java feature?";
var optionList1 =  ["1. Dynamic", "2. Architectural neuetral", "3. Obect-oriented", "4. Use of pointers"];
var question2 = "What method of the class.class is used to determine the name of a class represented by the class object as a string?"
var optionList2 = ["1. getClass()", "2. intern()", "3. getName()", "4. toString()"];
var optionList = optionList1;
var question = question1;

function startQuiz(){
   // isWin = false;
  //  timerCount = 5;
  

renderQuestion();
//startTimer();
}

function renderQuestion(){

   makeButtons(optionList);
   text.setAttribute("style", "font-size:30px");
   text.textContent = question;
   
}


function makeButtons(choice){
    for(var i=0; i < choice.length; i++){
var btn = document.createElement("button");
btn.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
var t = document.createTextNode(choice[i]);
btn.append(t);
document.body.appendChild(btn);
       }
}




startButton.addEventListener("click", startQuiz);
