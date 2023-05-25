// // CREER UN ELEMENT

// let nouvelElement = document.createElement("div");

// // DONNER UN ID A UN ELEMENT

// nouvelElement.id = "monElement";

// // AJOUTER DU CONTENU A UN ELEMENT

// nouvelElement.textContent = "Contenu de mon élément";


// // AJOUT DE L'ELEMENT AU PARENT

// let parentElement = document.getElementById("container");

// parentElement.appendChild(nouvelElement);

// Création de l'élément

// Création de l'élément
var nouvelElement = document.createElement("div");
nouvelElement.id = "monElement";
nouvelElement.textContent = "Contenu de mon élément";

// Ajout de l'élément au parent
var parentElement = document.getElementById("container");
parentElement.appendChild(nouvelElement);

console.log(nouvelElement);

