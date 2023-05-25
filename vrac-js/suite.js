///////////////////////////////////////////////////////////////////////////////
//                      Boucles
///////////////////////////////////////////////////////////////////////////////

// let valeurAAfficher = 0;

// for (let index = 0; index <= 15; index += 1) {
//   valeurAAfficher ++;
//   console.log(index);
  
// }
// alert(valeurAAfficher);

/*

for (initialisation; condition; incrémentation) {
  // instructions à exécuter
} */

/*let index = 0;

while(index <= 15) {
  console.log(index);
  index ++;
}*/

/*
while (condition) {
  // instructions à exécuter
}

do {
  // instructions à exécuter
} while (condition);

for (variable in objet) {
  // instructions à exécuter
}

for (variable of iterable) {
  // instructions à exécuter
} */

// const fruits = ["pomme", "banane", "orange", "raisin", "peche", "fraise"];

// fruits.push('coco');
// console.log(fruits);

// for (let index = 0; index < fruits.length; index++) {
//   console.log(fruits[index]);
  
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }


/*let index2 = 0; 
console.log(fruits);

while (index2 < fruits.length) {
  console.log(fruits[index2]);
  index2 += 1;
}*/

// for (const sousElement of fruits) {
//   if(sousElement == 'fraise'){
//     alert(`J'ai trouvé la fraise`);
//   }
//   // console.log(sousElement);
// }

// for (const fruit in fruits) {
//   console.log(fruits[fruit]);
//   console.log(fruit);
// }

// for (const chiffre of tableau2) {
//   // console.log(chiffre);
// }

// tableau2.forEach(function(tartempion) {
//   console.log(tartempion);
// });


///////////////////////////////////////////////////////////////////////////////
//                      Les fonctions
///////////////////////////////////////////////////////////////////////////////

// function maPremiereFonction(chiffre){
//   alert('Ceci est ma fonction: ' + chiffre);
// }

// for (let index = 0; index < 3; index++) {
//   maPremiereFonction(index);
  
// }

// function sommePersonnalisee(a, b) {
//   let resultat = a + b;
//   return resultat
// }

// let resultat2 = sommePersonnalisee(5, 7)
// console.log(resultat2);
// resultat2 = sommePersonnalisee(15, 27)
// console.log(resultat2);
// resultat2 = sommePersonnalisee(55, 77)
// console.log(resultat2);

///////////////////////////////////////////////////////////////////////////////
//                      JS sur HTML
///////////////////////////////////////////////////////////////////////////////

// let cibleDiv = document.getElementById("cible");

// let panier = 0;

// panier += 20;

// // le contenu du panier vaut ` + panier + ` €
// cibleDiv.innerHTML = `<p class='test'>le contenu du panier vaut ${panier} €</p>`;