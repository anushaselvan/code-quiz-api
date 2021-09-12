var startButton = document.querySelector(".start-Button");
var text =  document.querySelector("#main");

var isWin = false;
//var question1 = "Which of the following is not a Java feature?";
//var optionList1 =  ["1. Dynamic", "2. Architectural neuetral", "3. Obect-oriented", "4. Use of pointers"];
//var question2 = "What method of the class.class is used to determine the name of a class represented by the class object as a string?"
//var optionList2 = ["1. getClass()", "2. intern()", "3. getName()", "4. toString()"];
//var correctAnswer = ["4. Use of pointers", "3. getName()"];



var questions = ["Which of the following is not a Java feature?", "What method of the class.class is used to determine the name of a class represented by the class object as a string?", "In JavaScript, what is a block of statement?", "Which of the following type of a variable is volatile?"];
var currentQuestion = questions[0];
var button1 = document.createElement("button");
button1.textContent = "1. Dynamic";

var button2 = document.createElement("button");
button2.textContent = "2. Architectural neuetral";

var button3 = document.createElement("button");
button3.textContent = "3. Obect-oriented";

var button4 = document.createElement("button");
button4.textContent = "4. Use of pointers";

var button5 = document.createElement("button");
button5.textContent = "1. getClass()";

var button6 = document.createElement("button");
button6.textContent = "2. intern()";

var button7 = document.createElement("button");
button7.textContent = "3. getName()";

var button8 = document.createElement("button");
button8.textContent = "4. toString()";

var button9 = document.createElement("button");
button9.textContent = "1. Conditional block";

var button10 = document.createElement("button");
button10.textContent = "2. block that combines a number of statements into a single compound statement";

var button11 = document.createElement("button");
button11.textContent = "3. both conditional block and a single statement";

var button12 = document.createElement("button");
button12.textContent = "4. block that contains a single statement";

var button13 = document.createElement("button");
button13.textContent = "1. Mutable variable";

var button14 = document.createElement("button");
button14.textContent = "2. Dynamic variable";

var button15 = document.createElement("button");
button15.textContent = "3. Volatile variable";

var button16 = document.createElement("button");
button16.textContent = "4. Immutable variable";




button1.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button2.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button3.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button4.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button5.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button6.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button7.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button8.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button9.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button10.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button11.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button12.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button13.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button14.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button15.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
button16.setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");


var i = 0;


function startQuiz(){
    
renderQuestion();

}

function renderQuestion(){

    if (currentQuestion == questions[0])
    {
        console.log("aa");
        text.textContent = questions[0];
        text.setAttribute("style", "font-size:25px");
        text.appendChild(button1);
        text.appendChild(button2);
        text.appendChild(button3);
        text.appendChild(button4);

    }
   else if (currentQuestion == questions[1])
    {
        console.log("bb");
        text.textContent = questions[1];
        text.setAttribute("style", "font-size:25px");
        text.appendChild(button5);
        text.appendChild(button6);
        text.appendChild(button7);
        text.appendChild(button8);

    }
    else if (currentQuestion == questions[2])
    {
        console.log("cc");
        text.textContent = questions[2];
        text.setAttribute("style", "font-size:25px");
        text.appendChild(button9);
        text.appendChild(button10);
        text.appendChild(button11);
        text.appendChild(button12);

    }
    else if (currentQuestion == questions[3])
    {
        console.log("dd");
        text.textContent = questions[3];
        text.setAttribute("style", "font-size:25px");
        text.appendChild(button13);
        text.appendChild(button14);
        text.appendChild(button15);
        text.appendChild(button16);

    }
}

function correctAnswer(){
    console.log("Correct");
    i++;

    if( i <= questions.length)
    currentQuestion = questions[i];

    renderQuestion();
    
}
function wrongAnswer(){
console.log("wrong");
i++;
    if( i <= questions.length){
currentQuestion = questions[i];
    renderQuestion();
    }
}









startButton.addEventListener("click", startQuiz);
button1.addEventListener("click", wrongAnswer);
button2.addEventListener("click", wrongAnswer);
button3.addEventListener("click", wrongAnswer);
button4.addEventListener("click", correctAnswer);
button5.addEventListener("click", wrongAnswer);
button6.addEventListener("click", wrongAnswer);
button7.addEventListener("click", correctAnswer);
button8.addEventListener("click", wrongAnswer);
button9.addEventListener("click", wrongAnswer);
button10.addEventListener("click", correctAnswer);
button11.addEventListener("click", wrongAnswer);
button12.addEventListener("click", wrongAnswer);
button13.addEventListener("click", correctAnswer);
button14.addEventListener("click", wrongAnswer);
button15.addEventListener("click", wrongAnswer);
button16.addEventListener("click", wrongAnswer);























//function startQuiz(){
   // isWin = false;
  //  timerCount = 5;
//renderQuestion();
//startTimer();


/*
function renderQuestion(){
   makeButtons(optionList);
   text.setAttribute("style", "font-size:30px");
   text.textContent = question; 

}


function makeButtons(choice){
    for(var i=0; i < choice.length; i++){
        var btn,[i] = document.createElement("button");
        btn[i].setAttribute("style", "background-color: lightblue; margin:1% 35%; padding:8px; font-size: 18px; border-radius:6px; display:block");
        var t = document.createTextNode(choice[i]);
        btn[i].append(t);
document.body.appendChild(btn[i]);
       }
}

function checkAnswer(){
    var i = 0;
    if(document.getElementById("button").clicked == true)
    {
   // var userAnswer = document.getElementById("button");
    if(correctAnswer[i] === button.value){
   // answerReveal.textContent = "Correct!";
   //btn.setAttribute("style", "background-colour: lightgreen" );
console.log("correct!");
i++;
}
else {
    console.log("wrong");
    i++;
}
    }
}*/

