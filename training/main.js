// CREER UN ELEMENT

let nouvelElement = document.createElement("div");

// DONNER UN ID A UN ELEMENT

nouvelElement.id = "monElement";

// AJOUTER DU CONTENU A UN ELEMENT

nouvelElement.textContent = "Contenu de mon élément";


// AJOUT DE L'ELEMENT AU PARENT

    //CREATION DU PARENT

let parentElement = document.getElementById("container");

// AJOUT DE L'ELEMENT AU PARENT

parentElement.appendChild(nouvelElement);


// SELECTION DE L'ELEMENT A STYLISER

var element = document.getElementById('monElement');

// STYLISER L'ELEMENT 

element.style.backgroundColor = 'green';
element.style.color = 'white';
element.style.fontSize = '20px';



