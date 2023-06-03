"use strict";

let box = document.createElement("div");
box.style.backgroundColor = "green";
box.style.width = "100px";
box.style.textAlign = "center";
let parentElement = document.getElementById("body");
box.textContent = "box de ouf";
parentElement.appendChild(box);



let sum  = (a,b) => a*b

alert(sum(12,34));