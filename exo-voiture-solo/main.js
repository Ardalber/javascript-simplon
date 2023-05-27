let title = document.createElement("h1");
title.id = "title";
title.textContent = "k2000";

let parent = document.getElementById("body");
parent.appendChild(title);

title.style.backgroundColor = "red";
title.style.textAlign = "center";

let accelScr = document.createElement("button");
accelScr.className = "butt";
accelScr.textContent = "empty";

let box = document.createElement("div");
box.style.backgroundColor = "green";
box.style.height = "300px";
body.appendChild(box);

let smallBox1 = document.createElement("div");
let smallBox2 = document.createElement("div");
let smallBox3 = document.createElement("div");
let smallBox4 = document.createElement("div");
let smallBox5 = document.createElement("div");

smallBox1.style.backgroundColor = "blue";
smallBox1.style.height = "70px";
smallBox1.style.width = "70px";

smallBox2.style.backgroundColor = "yellow";
smallBox2.style.height = "70px";
smallBox2.style.width = "70px";

smallBox3.style.backgroundColor = "purple";
smallBox3.style.height = "70px";
smallBox3.style.width = "70px";

smallBox4.style.backgroundColor = "pink";
smallBox4.style.height = "70px";
smallBox4.style.width = "70px";

smallBox5.style.backgroundColor = "pink";
smallBox5.style.height = "70px";
smallBox5.style.width = "70px";

box.appendChild(smallBox1);
box.appendChild(smallBox2);
box.appendChild(smallBox3);
box.appendChild(smallBox4);
box.appendChild(smallBox5);

box.style.flexWrap = "wrap";
// let button = document.createElement("button");
// button.textContent = "accelerer";
// button.className = "bouton";
// body.appendChild(button);

// Tableau de bord de voiture

// [Variables]
// variable etat_moteur: false = arret / true = démarré
// variable vitesse : numérique, de 0 à 220 km/h
// variable régime moteur : numérique, de 0 à 5500 tr/min
// variable niveau_carburant : numérique, de 0 à 50L
// [Fonctions]
// faire une fonction qui démarre la voiture
// faire une fonction qui augmente la vitesse
// faire une fonction qui diminue la vitesse
// faire une fonction qui calcule le niveau de carburant en fonction de la distance parcourue sur la base d'une consommation de 6L/100km

// [Boutons]
// faire un bouton pour démarrer la voiture
// faire un bouton pour accélérer la voiture
// faire un bouton pour ralentir la voiture
// faire un bouton pour arrêter la voiture

// function stopCar() {
//     if (engineState == false) {
//         document.getElementById('enginestate').innerHTML = 'moteur allumé'
//     } else
//         document.getElementById('enginestate').innerHTML = 'moteur éteint'

// }

// Enoncé Tableau de bord de voiture

// [Variables]
// - variable etat_moteur: false = arret / true = démarré
// - variable vitesse : numérique, de 0 à 220 km/h
// - variable régime moteur : numérique, de 0 à 5500 tr/min
// - variable niveau_carburant : numérique, de 0 à 50L

// [Fonctions]
// - faire une fonction qui démarre la voiture
// - faire une fonction qui augmente la vitesse
// - faire une fonction qui diminue la vitesse
// - faire une fonction qui calcule le niveau de carburant en fonction de la distance
// parcourue sur la base d'une consommation de 6L/100km

// [Boutons]
// - faire un bouton pour démarrer la voiture
// - faire un bouton pour accélérer la voiture
// - faire un bouton pour ralentir la voiture
// - faire un bouton pour arrêter la voiture

// [Options]
// - refaire le plein
// - la voiture s'arrête si le niveau de carburant tombe à 0
// - générer une alerte si le niveau carburant descend sous 10L
// - Ajouter une boite de vitesse
