// CREER UN ELEMENT

let nouvelElement = document.createElement("div");

// DONNER UN ID A UN ELEMENT

nouvelElement.id = "monElement";

// AJOUTER DU CONTENU A UN ELEMENT

nouvelElement.textContent = "Contenu de mon élément";

//CREATION DU PARENT

let parentElement = document.getElementById("container");

// AJOUT DE L'ELEMENT AU PARENT

parentElement.appendChild(nouvelElement);

// SELECTION DE L'ELEMENT A STYLISER

var element = document.getElementById("monElement");

// STYLISER L'ELEMENT

element.style.backgroundColor = "green";
element.style.color = "white";
element.style.fontSize = "20px";
element.style.margin = "20px";

let secondElement = document.createElement("div");
secondElement.id = "second";
secondElement.textContent = "je viens de créer mon deuxieme élément !!";
secondElement.style.margin = "20px";
parentElement.appendChild(secondElement);

secondElement.style.backgroundColor = "pink";
secondElement.style.color = "blue";
secondElement.style.fontSize = "25px";

let tableau = [1, 2, 3, 4];

for (let index = 0; index < tableau.length; index++) {
  var thirdElement = document.createElement("div");
  thirdElement.style.color = "black ";
  thirdElement.textContent = "bien joué";
  thirdElement.style.margin = "10px";
  parentElement.appendChild(thirdElement);
}
