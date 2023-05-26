Tableau de bord de voiture


[Variables]
variable etat_moteur: false = arret / true = démarré
variable vitesse : numérique, de 0 à 220 km/h
variable régime moteur : numérique, de 0 à 5500 tr/min
variable niveau_carburant : numérique, de 0 à 50L

[Fonctions]
faire une fonction qui démarre la voiture  
faire une fonction qui augmente la vitesse
faire une fonction qui diminue la vitesse
faire une fonction qui calcule le niveau de carburant en fonction de la distance parcourue sur la base d'une consommation de 6L/100km

[Boutons]
faire un bouton pour démarrer la voiture
faire un bouton pour accélérer la voiture
faire un bouton pour ralentir la voiture
faire un bouton pour arrêter la voiture


function stopCar() {
    if (engineState == false) {
        document.getElementById('enginestate').innerHTML = 'moteur allumé'
    } else
        document.getElementById('enginestate').innerHTML = 'moteur éteint'

}

Enoncé Tableau de bord de voiture


[Variables]
- variable etat_moteur: false = arret / true = démarré
- variable vitesse : numérique, de 0 à 220 km/h
- variable régime moteur : numérique, de 0 à 5500 tr/min
- variable niveau_carburant : numérique, de 0 à 50L

[Fonctions]
- faire une fonction qui démarre la voiture
- faire une fonction qui augmente la vitesse
- faire une fonction qui diminue la vitesse
- faire une fonction qui calcule le niveau de carburant en fonction de la distance 
parcourue sur la base d'une consommation de 6L/100km

[Boutons]
- faire un bouton pour démarrer la voiture
- faire un bouton pour accélérer la voiture
- faire un bouton pour ralentir la voiture
- faire un bouton pour arrêter la voiture

[Options]
- refaire le plein
- la voiture s'arrête si le niveau de carburant tombe à 0
- générer une alerte si le niveau carburant descend sous 10L
- Ajouter une boite de vitesse

///////////////////////////////////////////////////////////////////////////////

index.html

 <h2>Tableau de bord</h2>

        <p>Etat moteur: <span id="engineState">Arrêt</span></p>
        <p>Vitesse voiture: <span id="carSpeed">0</span> km/h</p>
        <p>Régime moteur: <span id="engineSpeed">0</span> tr/min</p>
        <p>Niveau carburant: <span id="tankLevel">50</span> L</p>
        <p>Distance parcourue: <span id="distance">0</span> km</p>
        <p>&nbsp;<span id="alert"></span></p>

        <br>
        <button id="engineBtn" onclick="toggleEngine()">Démarrer la voiture</button> 
        <button onclick="increaseSpeed()">Accélérer la voiture</button> 
        <button onclick="decreaseSpeed()">Ralentir la voiture</button> 
        <button onclick="refuelTank()">Refaire le plein</button> 

main.js

///////////////////////////////////////////////////////////////////////////////
//                      Tableau de bord
///////////////////////////////////////////////////////////////////////////////

// Variables

let engineState = false;
let engineSpeed = 0;
let carSpeed = 0;
let tankLevel = 50;
let distance = 0;

// variable to store our intervalID
let nIntervId;

// Fonctions
function display() {
  // MAJ état moteur
  if(engineState == true) {
    document.getElementById('engineState').innerText = 'Démarré';
  } else {
    document.getElementById('engineState').innerText = 'Arrêt';
  }

  // MAJ vitesse voiture
  document.getElementById('carSpeed').innerText = carSpeed;

  // MAJ vitesse moteur
  document.getElementById('engineSpeed').innerText = engineSpeed;

  // MAJ niveau carburant
  document.getElementById('tankLevel').innerText = tankLevel;

  // MAJ distance parcourue
  document.getElementById('distance').innerText = distance;

}

// (engineState == false)  ==  (!engineState)

function toggleEngine() {
  if(engineState == false) {
    engineState = true;
    engineSpeed = 1000;
    document.getElementById('engineBtn').innerText = 'Arrêter la voiture';
  } else {
    engineState = false;
    carSpeed = 0;
    engineSpeed = 0;
    document.getElementById('engineBtn').innerText = 'Démarrer la voiture';
    if(nIntervId != null){
      //On n'arrete le timer s'il existe
      clearInterval(nIntervId);
      // release our intervalID from the variable
      nIntervId = null;
    }
  }
  display();

}

/////////////////////////////////// Without GearBox Version ///////////////////////////////////////////////////

function kmhToRpm(speed) {
  //1000 tr/min --> 0km/h
  //5500 tr/min --> 220km/h
  speed = Math.round(speed * (4500/220) + 1000);
  return speed
}

function increaseSpeed() {
  if(engineState == true) {
    if(carSpeed < 220) {
      carSpeed += 10;
      engineSpeed = kmhToRpm(carSpeed);
      display();
      
    }

    if((carSpeed > 0) && (nIntervId == null)) {
      // Créer le timer
      nIntervId = setInterval(periodicFunction, 2500);
    }
  }
}

function decreaseSpeed() {
  if(engineState == true) {
    if(carSpeed > 0) {
      carSpeed -= 10;
      engineSpeed = kmhToRpm(carSpeed);
      display();
    }

    if(carSpeed < 10){
      clearInterval(nIntervId);
      // release our intervalID from the variable
      nIntervId = null;
    }
  }
}


function refuelTank() {
  if(!engineState) {
    distance = 0;
    tankLevel = 50;
    document.getElementById('alert').innerText = "";
    display();
  }
}

function periodicFunction() {
  // console.log('Periodic Function' + nIntervId);

  let previsionTankLevel = tankLevel - carSpeed *(6/100);

  if(previsionTankLevel  < 10) {
    document.getElementById('alert').innerText = "Niveau carburant faible";
  } else {
    document.getElementById('alert').innerText = "";
  }
  if(previsionTankLevel  < 0.1) {
    tankLevel = 0;
    toggleEngine();
  } else {
    //Calcul distance parcourue
    // V = d/t
    // d = V*t -> 2,5s = 1h

    distance += carSpeed * 1;

    //Calcul conso
    // 6 L/100km
    tankLevel -= carSpeed *(6/100);
  }
  display();
}