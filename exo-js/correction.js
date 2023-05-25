// Faire une fonction hello() qui demande le nom de l'utilisateur et retourne le nom saisi par l'utilisateur

// Faire une fonction temperature() qui demande la temperature qu'il fait dehors et retourne le nombre saisi par l'utilisateur

// Faire une fonction isEven() qui détermine si le chiffre est pair ou impair

// Faire une fonction celToFahr() qui converti la temperature en Fahrenheit

// Faire une fonction display() qui affiche un message de bienvenue avec un nom saisi en paramètre, une temperature saisie en paramètre, qui indique si cette temperature est paire ou impaire et qui donne sa valeur en Fahrenheit

// Faire une fonction qui appelle successivement hello(), temperature(), isEven(), celToFahr() et display()

function hello() {
    // let name = prompt('Quel est votre nom?');
    let name = document.getElementById('name').value
    return name
  }
  
  
  function temperature() {
    // let temp = prompt('Quelle est la température extérieure?', 19);
    let temp = document.getElementById('temp').value
    return temp
  }
  
  function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function celToFahr(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  function display(name, temp, even, fahrenheit) {
    let cibleDiv = document.getElementById("cible");
  
    cibleDiv.innerHTML = `<h1>Bonjour ${name},</h1><br> 
      la température extérieure est de ${temp}°C<br><br>`;
    
    if(even) {
      cibleDiv.innerHTML += `Ce chiffre est pair<br><br>`;
    } else {
      cibleDiv.innerHTML += `Ce chiffre est impair<br><br>`;
    }
  
    cibleDiv.innerHTML += `Cette température correspond à ${fahrenheit}°F`;
  }
  
  function main(){
    let name = hello();
    let temp = temperature();
    let even = isEven(temp);
    let fahrenheit = celToFahr(temp);
    display(name, temp, even, fahrenheit);
    // display('Tartempion', 99, true, 0);
  }


//   -------------------------------------------------------------------------------------


function getId() {
    let id = document.getElementById('id').value
    return id
  }
  
  
  function getPwd() {
    let pwd = document.getElementById('pwd').value
    return pwd
  }
  
  function isAuthenticated(id, pwd) {
    // 0 : authentifié
    // 1 : id incorrect
    // 2 : pwd incorrect
    // 3 : id et pwd incorrects
    const idStock = 'thomas';
    const pwdStock = 'thomas';
  
    if ((id === idStock) && (pwd === pwdStock)) {
      return 0;
    } else {
      if (pwd === pwdStock) {
        return 1;
      } else if (id === idStock) {
        return 2;
      } else {
        return 3;
      }
    }
  }
  
  function displayIdError() {
    document.getElementById('erreurId').textContent = "L'identifiant est incorrect";
  }
  
  function cleanIdError() {
    document.getElementById('erreurId').textContent = "";
  }
  
  function displayPwdError() {
    document.getElementById('erreurPwd').textContent = "Le mot de passe est incorrect";
  }
  
  function cleanPwdError() {
    document.getElementById('erreurPwd').textContent = "";
  }
  
  function displayBothError() {
    displayIdError();
    displayPwdError();
  }
  
  function compteCaract(texte) {
    return texte.length;
  }
  
  
  
  function welcome(id, pwd) {
    let cibleDiv = document.getElementById("cible");
  
    let nbId = compteCaract(id);
    let nbPwd = compteCaract(pwd);
    cibleDiv.innerHTML = `<h1>Bonjour ${id},</h1><br> 
      l'identifiant a ${nbId} caractères <br>
      le mot de passe a ${nbPwd} caractères <br><br>`;
  
    if(nbPwd <= 8){
      cibleDiv.innerHTML += `Le mot de passe est trop court`;
    }
    
  }
  
  function main(){
    let id = getId();
    let pwd = getPwd();
    // let authStatus = ;
  
    // 0 : authentifié
    // 1 : id incorrect
    // 2 : pwd incorrect
    // 3 : id et pwd incorrects
  
    switch(isAuthenticated(id, pwd)){
      case 0 :
        welcome(id, pwd);
        break;
      case 1 :
        displayIdError();
        cleanPwdError()
        break;
      case 2 :
        displayPwdError();
        cleanIdError();
        break;
      default:
        displayBothError();
    }
  
  }


  