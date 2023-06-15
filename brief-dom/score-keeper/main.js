'use strict'

let input = document.getElementById('input');

let span = document.getElementById('span');
input.addEventListener("change", change);

function change (){
span.textContent = input.value;
}

 let winMessage = document.getElementById("win-message");
let scoreP1 = document.getElementById("score-p1");
let scoreP2 = document.getElementById("score-p2");
let buttonP1 = document.getElementById("button-p1");
let buttonP2 = document.getElementById("button-p2");

let scoreOne = scoreP1.innerHTML;

let reset = document.getElementById('reset');

let buttonP1Value = 0;
let buttonP2Value = 0;


buttonP1.addEventListener("click",increaseP1 );
buttonP2.addEventListener("click",increaseP2 );
reset.addEventListener("click", resetAll);

function increaseP1 (){

        buttonP1Value ++;
        
if (buttonP1Value <= input.value){
    scoreP1.textContent = buttonP1Value;

} 

if(buttonP1Value >= input.value)

        winMessage.textContent = "player 1 win";
}

function increaseP2 (){
    buttonP2Value ++;
    if (buttonP2Value <= input.value){
        if(buttonP2Value >= input.value)
        winMessage.textContent = "player 2 win";
                scoreP2.textContent = buttonP2Value;

    }
    }
    
function resetAll (){
    location.reload(true);
}


