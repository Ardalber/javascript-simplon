// Tableau de bord de voiture


// [Variables]
// variable etat_moteur: false = arret / true = démarré

let engineState = false;

// variable vitesse : numérique, de 0 à 220 km/h

let speed = 0

// variable régime moteur : numérique, de 0 à 5500 tr/min

let engineStateSpeed = 0

// variable niveau_carburant : numérique, de 0 à 50L

let fuelLevel = 50

let distance = 0

// faire une fonction qui démarre la voiture
function startCar() {
    engineState = true;
    if (engineState == true) {
        document.getElementById('enginestate').innerHTML = 'moteur allumé';

    }

};

function stopCar() {
    engineState = false;
    if (engineState == false) {
        document.getElementById('enginestate').innerHTML = 'moteur éteint';


    }
};

startCar();
stopCar();
// faire une fonction qui augmente la vitesse

function increaseSpeed() {
    if ((engineState == true) && (speed < 220)) {
        speed += 10

    };
    document.getElementById('carspeed').innerHTML = `${speed}  KM/H`;

};

increaseSpeed();


// faire une fonction qui diminue la vitesse

function decreaseSpeed() {

    if (speed > 10) {

        speed -= 10;
        document.getElementById('carspeed').innerHTML = `${speed - 10} KM/H`

    }
}

decreaseSpeed();
// faire une fonction qui calcule le niveau de carburant en fonction de la distance parcourue sur la base d'une consommation de 6L/100km

function ckeckFuelLevel() {



}


// [Boutons]
// faire un bouton pour démarrer la voiture
// faire un bouton pour accélérer la voiture
// faire un bouton pour ralentir la voiture
// faire un bouton pour arrêter la voiture