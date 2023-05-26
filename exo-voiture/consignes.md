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
