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
    const idStock = 'gaetan';
    const pwdStock = 'gaetane';

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
    document.getElementById('erreurpwd').textContent = "";
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

    cibleDiv.innerHTML = `<h1>Bonjour ${id}, </h1><br>
l'identifiant a ${nbId} caractères <br>
le mot de passe a ${nbPwd} caractères <br><br>`;

    if (nbPwd <= 8) {
        cibleDiv.innerHTML += `le mot de passe est trop court`;
    }




}



function main() {
    let id = getId();
    let pwd = getPwd();


    // 0 : authentifié
    // 1 : id incorrect
    // 2 : pwd incorrect
    // 3 : id et pwd incorrects

}


switch (isAuthenticated(id, pwd)) {{
    case 0:
        welcome(id, pwd);
        break;

    case 1:
        displayIdError();
        cleanPwdError();
        break;

    case 2:
        displayPwdError();
        cleanIdError();
        break;
    default:
        displayBothError();

}

}