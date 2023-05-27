// // creer un tableau

let array = ["salut", "les", "copains"];

console.log("1");
console.log(array);
// // // retirer le dernier element du tableau

array.pop();
console.log("2");
console.log(array);

// // // ajouter un element à la fin du tableau

array.push("yéyés");
console.log("3");
console.log(array);

// // // ajouter un element au début du tableau

array.unshift("hé");
console.log("4");
console.log(array);

// // // supprimer le premier element du tableau

array.shift();
console.log("5");
console.log(array);

//  trouver l'index d'un élément dans un tableau

var searchIndex = array.indexOf("yéyé");
console.log(searchIndex);
console.log(array);
// // // supprimer un élément grâce à son index array.

// splice(start, deleteCount, item1, item2);

// - start : début de modification
// - deleteCount : étendue de la modification
// - item , nom  des éléments facultatifs à ajouter au tableau

// // exemple :

// // retire "salut"

array.splice(0, 1);
console.log("6");
console.log(array);

array.unshift("salut", "comment", "vont");
console.log("7");
console.log(array);

// enlever 'comment' et 'vont'

array.splice(1, 2);
console.log("8");
console.log(array);
