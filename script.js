var startButton = document.querySelector(".start-Button");
var text =  document.querySelector("#main");
var h1El = document.querySelector("h1");
var scoreEl = document.createElement("p");
var initialsEl = document.createElement("div");
var txtArea = document.createElement("textarea");
var submitButton = document.createElement("button");
var timeEl = document.querySelector(".timer");
 
var correct = "Correct!";
var score = 0;
var i = 0;
var timeCount = 60;
timeEl.textContent = "Time:"+timeCount;




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




function startQuiz(){
    startTimer();
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
    //text.textContent = correct;

    score = score + 10;
    i++;
    if( i < questions.length){
        currentQuestion = questions[i];
        renderQuestion();
    }
    else { 
        timeCount = 0;
    showResult();
    }  
}

function wrongAnswer(){
console.log("wrong");
timeCount = timeCount - 10;
i++;
    if( i < questions.length){
currentQuestion = questions[i];
    renderQuestion();
    }
    else {
        timeCount = 0;
        showResult();
    }
}

function startTimer(){
    var timerInterval = setInterval(function(){
        
        if(timeCount === 0){
            clearInterval(timerInterval);
            showResult();
        }
        else{
            timeCount--;
            timeEl.textContent = "Time:"+timeCount;
        }
    },1000);
}


function showResult(){
    timeCount = 0;
    text.textContent = "";
    h1El.textContent = "All done!";
    h1El.setAttribute("style", "text-align:left; max-width: 40%");
    scoreEl.textContent = "Your final score is " + score;
    scoreEl.setAttribute("style", "text-align:left; max-width: 40%");
    initialsEl.textContent = "Enter initials:";
    initialsEl.setAttribute("style", "text-align:left; font-size: 20px; max-width: 40%");
    txtArea.textContent = "";
    txtArea.setAttribute("style", "display:block; justify-content:left");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("style", "background-color: gold; margin-top:20px; justify-content:left; padding:8px; font-size: 20px; border-radius:6px; display:block");


    text.appendChild(h1El);
    text.appendChild(scoreEl);
    text.appendChild(initialsEl);
    text.appendChild(txtArea);
    text.appendChild(submitButton);
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


