///////////////////////////////////////////////////////////////////////////////
//                      Variables
///////////////////////////////////////////////////////////////////////////////

/* La différence entre var, let et const réside dans leur portée (scope) et leur capacité à être réassignées.
 var a une portée de fonction, 
 let a une portée de bloc et peut être réassignée, 
 tandis que const a une portée de bloc et ne peut pas être réassignée après son initialisation.*/


 //et variableExemple = 0;

 // console.log(variableExemple + 5);
 
  ///////////////////////////////////////////////////////////////////////////////
 //                      Tableaux
 ///////////////////////////////////////////////////////////////////////////////
 
 // On déclare un tableau vide
 // let tartempion = [];
 
 // console.log(tableau);
 
 // On pousse successivement différents éléments dedans
 // tartempion.push("élément1");
 // tartempion.push("élément2");
 // tartempion.push("élément3");
 
 // console.log(tartempion[3]);
 // console.log(tableau[3]); --> Undefined
 // console.log(tableau[1]); --> élément2
 
 
 // On déclare le tableau avec les éléments dedans
 // let tableau2 = ["élément1s", "élément2s", "élément3s"];
 
 // On peut encore pousser des éléments dedans
 // tableau2.push("élément4");
 // tableau2.push("élément5");
 // tableau2.push("élément6");
 // console.log(tableau2);
 
 
 // let tableau3 = Array(5);
 // tableau3[2] = "element3";
 
 // tableau3.push("élément6");
 // tableau contient [undefined, undefined, undefined, undefined, undefined]
 // console.log(tableau3);
 
 // let tableau4 = Array.from("hello");
 // tableau4 contient ["h", "e", "l", "l", "o"]
 
 // console.log(tableau4);
 
 //console.log(tableau3);
 // Notez que les tableaux en JavaScript peuvent contenir n'importe quel type de données, 
 // y compris des tableaux (appelés tableaux multidimensionnels).
 // let tableau5 = [];
 // tableau5.push(Array.from("hello"));
 // tableau5.push(Array.from("simplon"));
 // tableau5.push(Array.from("lens"));
 
 // console.log(tableau5);
 // console.log(tableau5[2][2]);
 
 // console.log(tableau5[1]); --> ["s", "i", "m", "p", "l", "o", "n"]
 // console.log(tableau5[1][3]); --> ["p"]
 
 ///////////////////////////////////////////////////////////////////////////////
 //                      Conditions
 ///////////////////////////////////////////////////////////////////////////////
 
 // variableExemple = 55;
 
 // if (variableExemple == 53) {
 
 //   alert('La variable vaut 53');
 
 // } 
 
 // else if (variableExemple == 54) {
   
 //   alert('La variable vaut 54');
 
 // }
 
 // else {
 
 //   alert('La variable ne vaut ni 53 ni 54');
 
 // }
 
 /* if (variableExemple == 0) {
   // code à exécuter si la condition1 est vraie
   console.log('La variable "variableExemple" vaut 0'); 
 } else if (variableExemple == 1) {
   // code à exécuter si la condition2 est vraie
   console.log('La variable "variableExemple" vaut 1');
 } else {
   // code à exécuter si aucune des conditions précédentes n'est vraie
   //console.log('La variable "variableExemple" ne vaut ni 0 ni 1');
   console.log('La variable "variableExemple" vaut ' + variableExemple); 
 } */
 
 // variableExemple = 0;
 
//  switch (variableExemple) {
//    case 0:
//      // code à exécuter si la variable est égale à valeur1
//      alert('La variable "variableExemple" vaut 0');
//      break;
//    case 1:
//      // code à exécuter si la variable est égale à valeur2
//      alert('La variable "variableExemple" vaut 1');
//      break;
//    default:
//      // code à exécuter si la variable n'est égale à aucune des valeurs précédentes
//      alert('La variable "variableExemple" ne vaut ni 0 ni 1');
//  }