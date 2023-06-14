'use strict'

// CREATION DU PARENT GENERAL (BODY)

let parent = document.getElementById("body");

// CREATION DU PREMIER ENFANT

let divButton = document.createElement("div");
divButton.id = "divbutton";
divButton.style.marginTop = "30px";

// AJOUT DU PREMIER ENFANT AU BODY

parent.appendChild(divButton);

// CREATION DU BOUTON SUIVANT

let buttonNext = document.createElement("button");
buttonNext.textContent = "SUIVANTE";
buttonNext.style.margin = "0 0 30px 0";
buttonNext.style.width = "100px";

// AJOUT DU BOUTON SUIVANT A LA DIVBUTTON

divButton.style.textAlign = "center";

// creation du bouton précédent

let buttonPrev = document.createElement("button");
buttonPrev.textContent = "PRECEDENTE";
buttonPrev.style.margin = "0 30px 30px 0";



// ajout du bouton précédent

divButton.appendChild(buttonPrev);
divButton.appendChild(buttonNext);

// CREATION DE LA DIVIMAGE

let divImage = document.createElement("div");
divImage.style.textAlign = "center";
body.appendChild(divImage) ;

let arrayOfSrc = ["image-carousel/avengers.jpeg","image-carousel/black-widow.jpeg","image-carousel/captain.jpeg","image-carousel/hulk.jpeg","image-carousel/iron-man.jpeg","image-carousel/thor.jpeg"]


// creation de l'image


let firstImage = document.createElement("img");
firstImage.src = "image-carousel/avengers.jpeg";
divImage.appendChild(firstImage);


// ZONE DE TRAVAIL ZONE DE TRAVAIL ZONE DE TRAVAIL ZONE DE TRAVAIL
let valueN = 1;
function next(){
        firstImage.src = arrayOfSrc[valueN];              
        valueN ++ ;
                if (valueN < arrayOfSrc.length){

                }
                else valueN = 0;
 
}


function prev(){
        firstImage.src = arrayOfSrc[valueN];              
        valueN -- ;
                if (valueN > 0){

                }
                else valueN = 5;
 
}


buttonNext.addEventListener("click", next);
buttonPrev.addEventListener("click",prev);

        
        
       

    
   
    
  




      



 
    

