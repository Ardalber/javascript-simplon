"use strict"

//  creation du body
let body = document.getElementById("body");

// creation de la div bouton
let divButton = document.createElement("div");
divButton.style.textAlign = "center";
divButton.style.marginLeft = "auto";
divButton.style.marginRight = "auto";

body.appendChild(divButton);

//  creation du bouton ajouter
let buttonAdd = document.createElement("button");
buttonAdd.id = "buttonadd";
buttonAdd.innerText = "AJOUTER";
buttonAdd.style.marginBottom = "20px";
buttonAdd.style.marginRight = "18px";
divButton.appendChild(buttonAdd);

// creation du champ texte

let textInput = document.createElement("input");
textInput.id = "textinput";
textInput.setAttribute("size", "15px");
textInput.style.borderRadius = "5px";
textInput.setAttribute("type", "text");

divButton.appendChild(textInput);

// creation de la div liste

let divList = document.createElement("div");
divList.style.width = "300px";
divList.style.marginTop = "0px";
divList.style.paddingTop = "10px";
divList.style.marginLeft = "auto";
divList.style.marginRight = "auto";
divList.style.height = "500px";
body.appendChild(divList);

//  ZONE DE TRAVAIL ZONE DE TRAVAIL ZONE DE TRAVAIL ZONE DE TRAVAIL ZONE DE TRAVAIL ZONE DE TRAVAIL ZONE DE TRAVAIL
let valueId = 0;

function addTodo() {
  if(textInput.value.trim()!== ""){


  
  valueId++;
  // creation de la div card and trash
  let cardAndTrash = document.createElement("div");
  cardAndTrash.id = valueId;
  cardAndTrash.style.marginTop = "10px";
  cardAndTrash.style.height = "50px";
  cardAndTrash.style.display = "flex";

  // creation de la todo card
  let todoCard = document.createElement("div");
  todoCard.id = valueId;
  todoCard.style.width = "200px";
  todoCard.style.height = "50px";
  todoCard.style.border = "1px solid black";
  todoCard.style.backgroundColor = "green";
  todoCard.style.borderRadius = "10px";

  // creation du P dans todocard

  let p = document.createElement("p");
  todoCard.appendChild(p);
  p.style.marginLeft = "10px";
  p.innerHTML = textInput.value;

  // creation du bouton trash
  let trash = document.createElement("button");
  trash.id = valueId;
  trash.style.height = "50px";
  trash.style.width = "50px";
  trash.style.marginLeft = "10px";
  trash.style.backgroundSize = "cover";
  trash.style.backgroundImage = "url('images/trash.svg')";
  trash.addEventListener("click", removeTodo);
  trash.param = valueId;

  divList.appendChild(cardAndTrash);
  cardAndTrash.appendChild(todoCard);
  cardAndTrash.appendChild(trash);

  textInput.value = "";
}
}
buttonAdd.addEventListener("click", addTodo);

function removeTodo(evt) {
  let id = evt.currentTarget.param;

  let recupId = document.getElementById(id);

  divList.removeChild(recupId);
}
