//Selecciono las ubicaciones
let name = document.forms[1][0];
let errorsName = document.getElementById("errors-name");
let email = document.forms[1][1];
let errorsEmail = document.getElementById("errors-email");
let user = document.forms[1][2];
let errorsUsuario = document.getElementById("errors-usuario");
let password = document.forms[1][3];
let errorsPassword = document.getElementById("errors-password");
let repeatPassword = document.forms[1][4];
let errorsRepeatPassword = document.getElementById("errors-rep-pass");
let regUser = document.forms[2][0];
let regPass = document.forms[2][1];
let signupButton = document.getElementById("signup-button");
let loginButton = document.getElementById("login-button");
//Asigno el localStorage
let usersDB = JSON.parse(localStorage.getItem("users"));
//Listener

name.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
user.addEventListener("blur", userVerify, true);
password.addEventListener("blur", passwordVerify, true);

//Boton de registro
signupButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (validandoRegistro()){
    console.log("hey")
  }
  if(checkEmailInDB(email)){
    window.alert("Email ya utilizado");
    return false;
  }else{
    crearUsuario(name.value, email.value, email.value, password.value);
  }
  
});
//Boton de Login





//funciones
function crearUsuario(name, email, user, password) {
  const nuevoUsuario = new Usuario(name, email, user, password);

  if (usersDB) {
    usersDB.push(nuevoUsuario);
  } else {
    usersDB = [nuevoUsuario];
  }
  localStorage.setItem("users", JSON.stringify(usersDB));
}
function validandoRegistro() {
  // validando nombre
  if (name.value == "") {
    name.style.border = "1px solid red";
    errorsName.textContent = "Se requiere nombre";
    errorsName.style.color = "red";
    name.focus();
    return false;
  }
  // validando nombre
  if (name.value.length < 3) {
    name.style.border = "1px solid red";
    errorsName.textContent = "El nombre debe de tener más de tres letras";
    errorsName.style.color = "red";
    name.focus();
    return false;
  }

  // validando email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById("email").style.color = "red";
    errorsEmail.textContent = "Se requiere email";
    errorsEmail.style.color = "red";
    email.focus();
    return false;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)) {
    email.style.border = "1px solid red";
    document.getElementById("email").style.color = "red";
    errorsEmail.textContent = "Email no esta escrito de manera correcta";
    errorsEmail.style.color = "red";
    email.focus();
    return false;
  }
  // validando usuario
  if (user.value == "") {
    user.style.border = "1px solid red";
    document.getElementById("usuario").style.color = "red";
    errorsUsuario.textContent = "Se requiere Usuario";
    errorsUsuario.style.color = "red";
    user.focus();
    return false;
  }
  // validando usuario
  if (user.value.length < 3) {
    user.style.border = "1px solid red";
    document.getElementById("usuario").style.color = "red";
    errorsUsuario.textContent = "El usuario tiene que tener más de 3 letras";
    errorsUsuario.style.color = "red";
    user.focus();
    return false;
  }
  // validando password
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById("password").style.color = "red";
    errorsRepeatPassword.style.border = "1px solid red";
    errorsPassword.textContent = "Se requiere Password";
    password.focus();
    return false;
  }
  // verificar los dos passwords
  if (password.value != repeatPassword.value) {
    password.style.border = "1px solid red";
    document.getElementById("repeat-password").style.color = "red";
    errorsRepeatPassword.style.border = "1px solid red";
    errorsPassword.innerHTML = "The two passwords do not match";
    return false;
  }
}
function checkEmailInDB (email){
    let mailExiste = false;
    if (!usersDB){
        return false;
    }
    else{
        usersDB.forEach(user=>{
            if (user.mail === email.value){
                mailExiste=true;
            }
        });
    }
    return mailExiste;
    //console.log(mailExiste);
}

function checkUsuario(usersDB){
    let usuarioExiste = false;
    if (!usersDB){
        return true;
    }
    else{
        usersDB.forEach(user=>{
            if (user.mail === user.value){
                usuarioExists=false;
            }
        });
    }
    return usuarioExiste;
}
// Eventos de relleno
function nameVerify() {
  if (name.value != "") {
    name.style.border = "1px solid #5e6e66";
    document.getElementById("name").style.color = "#5e6e66";
    errorsName.innerHTML = "";
    return true;
  }
}
function userVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById("usuario").style.color = "#5e6e66";
    errorsUsuario.innerHTML = "";
    return true;
  }
}
function emailVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById("email").style.color = "#5e6e66";
    errorsEmail.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    password.style.border = "1px solid #5e6e66";
    document.getElementById("repeat-password").style.color = "#5e6e66";
    document.getElementById("password").style.color = "#5e6e66";
    errorsPassword.innerHTML = "";
    return true;
  }
  if (password.value === repeatPassword.value) {
    password.style.border = "1px solid #5e6e66";
    document.getElementById("repeat-password").style.color = "#5e6e66";
    errorsPassword.innerHTML = "";
    return true;
  }
}
