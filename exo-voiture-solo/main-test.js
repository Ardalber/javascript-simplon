// Tableau de bord de voiture

// [Variables]
// variable etat_moteur: false = arret / true = démarré
// variable vitesse : numérique, de 0 à 220 km/h
// variable régime moteur : numérique, de 0 à 5500 tr/min
// variable niveau_carburant : numérique, de 0 à 50L

let engineStatus = false
let speed = 0
let distance = 0
let fuelLevel = 50
let engineSpeed = 1110

function startCar () {
  engineStatus = true
  document.getElementById('engine').textContent = 'ON'
  setEngineSpeed()
}

function stopCar () {
  engineStatus = false
  document.getElementById('engine').textContent = 'OFF'
}

function increaseSpeed () {
  if (engineStatus === true && speed <= 210) {
    speed += 10
    document.getElementById('speed').textContent = `${speed}` + ' KM/H'
    setFuel()
  }
}

function decreaseSpeed () {
  if (speed >= 10) {
    speed -= 10
    document.getElementById('speed').textContent = `${speed}`
  }
}

function calcDistance () {
  if (speed > 0 && engineStatus == true) {
    distance += 10
    document.getElementById('long').textContent = `${distance}` + ' KM'
  }
}
setInterval(calcDistance, 1000)

function setFuel () {
  document.getElementById('fuellevel').textContent = `${fuelLevel}` + ' L'
}
// AFAIRE// AFAIRE// AFAIRE// AFAIRE// AFAIRE// AFAIRE

function setEngineSpeed () {
  if (speed > 0 && engineStatus === true) {
    engineSpeed = Math.round(speed * (4500 / 220) + 1000)
    document.getElementById('enginespeed').textContent =
      `${engineSpeed}` + ' TR/MN'
    console.log(engineSpeed)
  }
}

// Appel de la fonction toutes les 1 secondes
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

// Enoncé Tableau de bord de voiture

// [Variables]
// - variable etat_moteur: false = arret / true = démarré
// - variable vitesse : numérique, de 0 à 220 km/h
// - variable régime moteur : numérique, de 0 à 5500 tr/min
// - variable niveau_carburant : numérique, de 0 à 50L
