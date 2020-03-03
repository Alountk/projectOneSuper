//Selecciono las ubicaciones
let name = document.forms[1][0];
let errorsName = document.getElementById("errors-name");
let email = document.forms[1][1];
let errorsEmail = document.getElementById("errors-email");
let user = document.forms[1][2];
let errorsUsuario = document.getElementById("errors-usuario");
let password = document.forms[1][3];
let repeatPassword = document.forms[1][4];
let regUser = document.forms[2][0];
let regPass = document.forms[2][1];
let signupButton = document.getElementById("signup-button");
let loginButton = document.getElementById("login-button");
//Asigno el localStorage
let usersDB = JSON.parse(localStorage.getItem("users"));
//Listener

name.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
user.addEventListener("blur",userVerify, true);
password.addEventListener("blur", passwordVerify, true);

signupButton.addEventListener("click", function(event) {
  event.preventDefault();
  borrarErrores();
  console.log("llego aqui");
  if (validandoRegistro()) {
    console.log("validando");
  }
});

//funciones
function crearUsuario(name, email, phone, password) {
  const nuevoUsuario = new Usuario(name, email, phone, password);

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
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
    email.style.border = "1px solid red";
    document.getElementById("email").style.color = "red";
    errorsEmail.textContent = "Email no esta escrito de manera correcta";
    errorsEmail.style.color = "red";
    email.focus();
    return false;
  }

  if (user.value == "") {
    // validando usuario
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
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // verificar los dos passwords
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById("repeat-password").style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
}
// event handler functions
function nameVerify() {
  if (name.value != "") {
    name.style.border = "1px solid #5e6e66";
    document.getElementById("name").style.color = "#5e6e66";
    errorsName.innerHTML = "";
    return true;
  }
}
function userVerify() {
    if (user.value != "") {
      user.style.border = "1px solid #5e6e66";
      document.getElementById("name").style.color = "#5e6e66";
      errorsName.innerHTML = "";
      return true;
    }
  }
function userVerify() {
    if (email.value != "") {
      email.style.border = "1px solid #5e6e66";
      document.getElementById("user").style.color = "#5e6e66";
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
    password_error.innerHTML = "";
    return true;
  }
  if (password.value === password_confirm.value) {
    password.style.border = "1px solid #5e6e66";
    document.getElementById("repeat-password").style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }
}

function borrarErrores() {
  let errors = [...document.getElementsByClassName("error")];
  errors ? errors.forEach(error => error.remove()) : null;
}
