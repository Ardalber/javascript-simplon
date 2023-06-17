"use strict";

// obtention du bouton start
let start = document.getElementById('start');
// ajoute de l'ecouteur d'evenement sur le bouton démarrer
start.addEventListener('click', demarrer);

let etat = document.getElementById('etat');

let stop = document.getElementById('stop');
stop.addEventListener('click',arreter);

let accelerer = document.getElementById("accelerer");
accelerer.addEventListener("click", augVitesse);

let compteur = document.getElementById('vitesse');

let ralentir = document.getElementById("ralentir");
ralentir.addEventListener("click", dimVitesse);

let dist = document.getElementById('distance');
let tps = document.getElementById('temps');

let reservRestant = document.getElementById('reservoir');
// [Variables]
// variable etat_moteur: false = arret / true = démarré
let moteur = false;
// variable vitesse : numérique, de 0 à 220 km/h
let vitesse = 0;
// variable régime moteur : numérique, de 0 à 5500 tr/min
let vitesseMoteur = 0; 
// variable niveau_carburant : numérique, de 0 à 50L
let reservoir = 250;
// variable de distance
let distance = 0; 
//  variable temps
let temps = 0;


// creation du temps !!!!


// [Fonctions]
// faire une fonction qui démarre la voiture
function demarrer() {
  moteur = true;
  etat.textContent = "allumé";
  setInterval(increTemps, 1000);

}

function arreter() {
  if (moteur === true) {
    moteur = false;
    etat.textContent = "éteint";
    clearInterval(incrementInterval);
    temps = 0;
    distance = 0;
  }
}

// faire une fonction qui augmente la vitesse
function augVitesse() {
  if(vitesse <= 210 && moteur === true){
          vitesse += 10;
          compteur.textContent = vitesse;
  }
}
// faire une fonction qui diminue la vitesse

function dimVitesse() {
  if(vitesse >= 10){
        vitesse -= 10;
        compteur.textContent = vitesse;

  }
}

function increTemps() {
  if (vitesse > 0) {
    temps += 1;
    tps.textContent = temps;
    distance += Math.round((((vitesse * temps) / 3600)/100) * 1000);
    calculerNiveauCarburant(reservoir);
    reservRestant.textcontent = reservoir;


    dist.textContent = distance;
  }
}

// faire une fonction qui calcule le niveau de carburant en fonction de la distance parcourue sur la base d'une consommation de 6L/100km
function calculerNiveauCarburant(reservoir) {
  let consommation = (distance / 10) * (6/100);
  reservoir -= consommation;
  console.log("conso" + consommation);
  console.log("reser" + reservoir);
}
