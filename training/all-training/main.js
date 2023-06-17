'use strict'

let words = "salut les gens";

function stringToArray(words) {
   words = words.trim();
   let result = words.split(" ");
   console.log(result);
   return result;
}


stringToArray( words);