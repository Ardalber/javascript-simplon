// CREATION DU PARENT GENERAL (BODY)

let parent = document.getElementById("body");

// CREATION DU PREMIER ENFANT

let divButton = document.createElement("div");
divButton.id = "divbutton";
divButton.style.marginTop = "30px";

// AJOUT DU PREMIER ENFANT AU BODY

parent.appendChild(divButton);

// CREATION DU BOUTON

let button = document.createElement("button");
button.textContent = "SUIVANTE";
button.style.margin = "0 0 30px 0";

// AJOUT DU BOUTON A LA DIVBUTTON

divButton.appendChild(button);
divButton.style.textAlign = "center";

// CREATION DE LA DIVIMAGE

let divImage = document.createElement("div");
divImage.style.textAlign = "center";
body.appendChild(divImage) ;


// creation de avengers

let avengers = document.createElement("img");
avengers.id = "avengers";
avengers.src = "image-carousel/avengers.jpeg";
avengers.style.border = "1px solid black";
avengers.style.padding = "20px";
avengers.style.borderRadius = "15px";

//  creation de thor
let thor = document.createElement("img");
thor.id = "thor";
thor.src = "image-carousel/thor.jpeg"
thor.style.border = "1px solid black";
thor.style.padding = "20px";
thor.style.borderRadius = "15px";

// creation de hulk

let hulk = document.createElement("img");
hulk.id = "hulk";
hulk.src = "image-carousel/hulk.jpeg";

hulk.style.border = "1px solid black";
hulk.style.padding = "20px";
hulk.style.borderRadius = "15px";

// creation de blackWidow
let blackWidow = document.createElement("img");
blackWidow.id = "blackwidow";
blackWidow.style.border = "1px solid black";
blackWidow.style.padding = "20px";
blackWidow.style.borderRadius = "15px";



divImage.appendChild(avengers);

console.log(avengers.id);
avengers.setAttribute("id", 'hulk');


button.addEventListener('click', () => {
    if (avengers.id = "avengers"){
        divImage.removeChild(avengers)
        divImage.appendChild(hulk)
    }
    else if (hulk.id = "hulk"){
        divImage.removeChild(hulk)
        divImage.appendChild(thor)

    }
});