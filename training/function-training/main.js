// // // Exercice : Catégorisation des nombres
// // // Déclarez une variable "nombre" et assignez-lui une valeur numérique de votre choix

// // // let nombre = 0;
// // // // Écrivez une conditionnelle pour vérifier dans quelle catégorie se trouve le nombre :

// // // // - Si le nombre est positif et supérieur à zéro, affichez "Le nombre est positif."

// // // function checkPositive() {
// // //   if (nombre > 0) {
// // //     alert("le nombre est positif");
// // //   }
// // // }
// // // checkPositive();

// // // // - Si le nombre est négatif, affichez "Le nombre est négatif."
// // // // - Si le nombre est égal à zéro, affichez "Le nombre est zéro."

// // // function checkNegative() {
// // //   if (nombre < 0) {
// // //     alert("le nombre est négatif");
// // //   }
// // // }
// // // checkNegative();

// // // function checkZero() {
// // //   if (nombre == 0) {
// // //     alert("le nombre est égal à zéro");
// // //   }
// // // }

// // // checkZero();

// // // Testez votre code en modifiant la valeur de la variable "nombre" et en vérifiant les résultats.

// // // Exercice : Calcul du prix de vente

// // // Déclarez une variable "prixUnitaire" et assignez-lui une valeur numérique de votre choix

// // let prixUnitaire = 10;
// // // Déclarez une variable "quantite" et assignez-lui une valeur numérique de votre choix
// // let quantite = 8;
// // // Calculez le prix total en multipliant le prix unitaire par la quantité et assignez-le à une variable "prixTotal"
// // let prixTotal = prixUnitaire * quantite;

// // console.log(prixTotal);

// // // Utilisez une conditionnelle pour appliquer une réduction de 10% sur le prix total si la quantité est supérieure ou égale à 10

// // function reduction() {
// //   if (quantite >= 10) {
// //     console.log(prixTotal - prixTotal / 10);
// //   }
// // }
// // reduction();

// // // Affichez le prix total final après avoir appliqué éventuellement la réduction

// // // Testez votre code en modifiant les valeurs de "prixUnitaire" et "quantite" pour observer les résultats.

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // Exercice : Affichage des nombres pairs

// // Utilisez une boucle for pour afficher tous les nombres pairs de 0 à 10.

// // Astuce : Vous pouvez utiliser l'opérateur modulo (%) pour vérifier si un nombre est pair.

// // Testez votre code pour vérifier si les nombres pairs sont correctement affichés.
// // Exercice : Calcul de la somme des nombres

// // function nbPair() {
// //   for (let index = 0; index < 100; index++) {
// //     if (index % 2 == 0) {
// //       console.log(index);
// //     }
// //   }
// // }
// // nbPair();

// // Déclarez une variable "n" et assignez-lui une valeur numérique de votre choix

// // var n = 5;

// // // Déclarez une variable "somme" et assignez-lui la valeur 0
// // var somme = 0;

// // // Utilisez une boucle for pour calculer la somme de tous les nombres de 1 à "n" en les ajoutant à la variable "somme"

// // function sum() {
// //   for (var i = 0; i <= n; i++) {
// //     somme += i;

// //     console.log(somme);
// //   }
// // }

// // sum(); // Affichez la somme finale après avoir terminé la boucle

// // Testez votre code en modifiant la valeur de "n" pour observer les résultats.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// // Exercice : Vérification d'un nombre

// // Déclarez une variable "nombre" et assignez-lui une valeur numérique de votre choix
// var nombre = 0;

// // // Utilisez une conditionnelle pour vérifier si le nombre est positif, négatif ou égal à zéro

// function check() {
//   if (nombre > 0) {
//     console.log("le nombre est positif");
//   } else if (nombre < 0) {
//     console.log("le nombre est négatif");
//   } else console.log("le nombre est égal à 0");
// }

// check();
// // - Si le nombre est supérieur à zéro, affichez "Le nombre est positif."
// // - Sinon, s'il est inférieur à zéro, affichez "Le nombre est négatif."
// // - Sinon, affichez "Le nombre est zéro."

// // Testez votre code en modifiant la valeur de la variable "nombre" et en vérifiant les résultats.
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// Exercice : Affichage des éléments d'un tableau

// Déclarez un tableau "noms" contenant quelques noms de votre choix
arrayName = ["pier", "pol", "jak"];
// Utilisez la méthode forEach() pour parcourir tous les éléments du tableau
// À chaque itération, affichez l'élément courant à l'aide de console.log()
arrayName.forEach((element) => {
  console.log("salut " + element);
});
// Testez votre code en modifiant les éléments du tableau "noms" pour observer les résultats.

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// Exercice : Compteur décroissant

// Déclarez une variable "compteur" et assignez-lui une valeur numérique de votre choix
let compteur = 10;
// Utilisez une boucle while pour afficher les nombres de "compteur" jusqu'à 0

while (compteur > 0) {
  console.log((compteur -= 1));
}

// À chaque itération, décrémentez la valeur de "compteur" de 1

// Testez votre code en modifiant la valeur de "compteur" pour observer les résultats.
