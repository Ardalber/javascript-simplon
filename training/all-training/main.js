// // Écris un programme qui demande à l'utilisateur d'entrer un nombre et affiche "Le nombre est positif" s'il est supérieur à zéro.

// let number = prompt("entre un nombre");

// if (number > 0) {
//   console.log("ton nombre est positif");
// } else {
//   console.log("ton nombre n'est pas positif");
// }
// Écris un programme qui demande à l'utilisateur d'entrer deux nombres et affiche "Le premier nombre est plus grand" si le premier nombre est supérieur au deuxième.

// let firstNumber = prompt("entre ton premier nombre");
// let secondNumber = prompt("entre ton deuxième nombre");

// if (firstNumber > secondNumber) {
//   console.log("le premier nombre est plus grand");
// } else {
//   console.log("le deuxième nombre est plus grand ou égal au premier");
// }
// Écris un programme qui demande à l'utilisateur d'entrer un caractère (une lettre de l'alphabet) et affiche "Le caractère est une voyelle" si c'est une voyelle, et "Le caractère est une consonne" sinon.
// let askLetter = prompt("entre une lettre");
// Écris un programme qui demande à l'utilisateur d'entrer trois nombres et affiche "Les nombres sont tous égaux" s'ils sont tous égaux, "Deux nombres sont égaux" s'ils sont deux égaux, et "Les nombres sont tous différents" sinon.
// let firstAskNumber = prompt("entre un nombre");
// let secondAskNumber = prompt("entre un second");
// let thirdAskNumber = prompt("entre un troisième nombre");

// if ((firstAskNumber == secondAskNumber) == thirdAskNumber) {
//   console.log("les trois nombres sont égaux");
// } else if (firstAskNumber == secondAskNumber) {
//   console.log("au moins deux nombres sont égaux");
// } else if (secondAskNumber == thirdAskNumber) {
//   console.log("au moins deux nombres sont égaux");
// } else if (firstAskNumber == thirdAskNumber) {
//   console.log("au moins deux nombres sont égaux");
// } else {
//   console.log("les nombres sont touts différents");
// }
// Écris un programme qui demande à l'utilisateur d'entrer un nombre entre 1 et 7 et affiche le jour de la semaine correspondant à ce nombre (1 pour lundi, 2 pour mardi, etc.). Si l'utilisateur entre un nombre en dehors de cette plage, affiche "Nombre invalide".

// let number = prompt("entre un chiffre entre 1 et 7");

// if (number == 1) {
//   console.log("ce chiffre correspond au lundi");
// } else if (number == 2) {
//   console.log("ce chiffre correspond au mardi");
// } else if (number == 3) {
//   console.log("ce chiffre correspond au mercredi");
// } else if (number == 4) {
//   console.log("ce chiffre correspond au jeudi");
// } else if (number == 5) {
//   console.log("ce chiffre correspond au vendredi");
// } else if (number == 6) {
//   console.log("ce chiffre correspond au samedi");
// } else if (number == 7) {
//   console.log("ce chiffre correspond au dimanche");
// } else {
//   console.log("le chiffre est invalide");
// }

//
// Écris un programme qui affiche les nombres de 1 à 10 à l'aide d'une boucle while.
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// Écris un programme qui demande à l'utilisateur de deviner un nombre compris entre 1 et 100. Tant que l'utilisateur n'a pas deviné le nombre correct, le programme devrait lui demander de continuer à deviner.

// let askNumber = prompt("devine un nombre entre 1 et 100");
// let response = 76;

// while (askNumber != response) {
//   askNumber = prompt("devine un nombre entre 1 et 100");
// }
// if ((askNumber = 76)) {
//   console.log("bien joué");
// }
// Écris un programme qui demande à l'utilisateur d'entrer des nombres positifs et les ajoute tous jusqu'à ce que l'utilisateur entre un nombre négatif. Une fois que l'utilisateur entre un nombre négatif, le programme devrait afficher la somme des nombres positifs entrés.

let askNumber = prompt("entre un nombre positif");
let askAnotherNumber = prompt("entre un autre nombre positif");
while (askNumber > 0) {
  let result = askNumber + askAnotherNumber;
  console.log(result);
}

// Écris un programme qui affiche les premiers 10 termes de la séquence de Fibonacci en utilisant une boucle while.

// Écris un programme qui génère un nombre aléatoire entre 1 et 100, puis demande à l'utilisateur de deviner ce nombre. Le programme devrait indiquer si la devinette est trop élevée, trop basse ou correcte. Le jeu devrait continuer jusqu'à ce que l'utilisateur devine le bon nombre.
