//Selecciono las ubicaciones
let name = document.forms[2][0];
let errorsName = document.getElementById("errors-name");
let email = document.forms[2][1];
let errorsEmail = document.getElementById("errors-email");
let password = document.forms[2][2];
let errorsPassword = document.getElementById("errors-password");
let repeatPassword = document.forms[2][3];
let errorsRepeatPassword = document.getElementById("errors-rep-pass");
let regMail = document.forms[1][0];
let errRegMail = document.getElementById("errors-mail-registrado");
let regPass = document.forms[1][1];
let errRegPass = document.getElementById("errors-password-registrado");
let signupButton = document.getElementById("register-button");
let loginButton = document.getElementById("login-button");
//Asigno el localStorage
let usersDB = JSON.parse(localStorage.getItem("users"));
let currentUsersDB = JSON.parse(localStorage.getItem("currentUsers"));

//Listener + blur

// name.addEventListener("blur", nameVerify, true);
// email.addEventListener("blur", emailVerify, true);
// password.addEventListener("blur", passwordVerify, true);

//Boton de registro
signupButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (validandoRegistro()){
    if(checkEmailInDB(email)){
      window.alert("Email ya utilizado");
      return;
    }else{
      crearUsuario(name.value, email.value, password.value);
    }
  }
  
  
});
//Boton de Login
loginButton.addEventListener("click", event => {
  event.preventDefault();
  if (checkEmailAndPassword(regMail.value,regPass.value)){
    if(!checkInDBLogin(regMail.value,regPass.value)){
      console.log("esta bien el correo");
      // ;
      

    }else{
      console.log("llego al else esta mal el correo");
      return;
    }
  }
  
});




//funciones
//Para crear usuarios
function crearUsuario(name, email, password) {
  const nuevoUsuario = new Usuario(name, email, password);

  if (usersDB) {
    usersDB.push(nuevoUsuario);
  } else {
    usersDB = [nuevoUsuario];
  }
  localStorage.setItem("users", JSON.stringify(usersDB));
}
//Validar el registro
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
    email.innerHTML = "";
    return false;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)) {
    email.style.border = "1px solid red";
    document.getElementById("email").style.color = "red";
    errorsEmail.textContent = "Email no esta escrito de manera correcta";
    errorsEmail.style.color = "red";
    email.focus();
    email.innerHTML = "";
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
    console.log("somn diferentes");
    password.style.border = "1px solid red";
    document.getElementById("repeat-password").style.color = "red";
    errorsRepeatPassword.style.border = "1px solid red";
    errorsPassword.innerHTML = "The two passwords do not match";
    password.value="";
    repeatPassword.value="";
    return false;
  }
  return true;
}
function checkEmailInDB (email){
    let mailExiste = false;
    if (!usersDB){
        return false;
    }
    else{
        usersDB.forEach(user=>{
            if (user.email === email.value){
                mailExiste=true;
            }
        });
    }
    return mailExiste;
    //console.log(mailExiste);
}

// Eventos de relleno
// function nameVerify() {
//   if (name.value != "") {
//     name.style.border = "1px solid #5e6e66";
//     document.getElementById("name").style.color = "#5e6e66";
//     errorsName.innerHTML = "";
//     return true;
//   }
// }
// function userVerify() {
//   if (email.value != "") {
//     email.style.border = "1px solid #5e6e66";
//     document.getElementById("usuario").style.color = "#5e6e66";
//     errorsUsuario.innerHTML = "";
//     return true;
//   }
// }
// function emailVerify() {
//   if (email.value != "") {
//     email.style.border = "1px solid #5e6e66";
//     document.getElementById("email").style.color = "#5e6e66";
//     errorsEmail.innerHTML = "";
//     return true;
//   }
// }
// function passwordVerify() {
//   if (password.value != "") {
//     password.style.border = "1px solid #5e6e66";
//     document.getElementById("repeat-password").style.color = "#5e6e66";
//     document.getElementById("password").style.color = "#5e6e66";
//     errorsPassword.innerHTML = "";
//     return true;
//   }
//   if (password.value === repeatPassword.value) {
//     password.style.border = "1px solid #5e6e66";
//     document.getElementById("repeat-password").style.color = "#5e6e66";
//     errorsPassword.innerHTML = "";
//     return true;
//   }
// }
//Crear current user
function crearCurrentUser(email, password) {
  console.log("llego aquí");
  const currentUser = new Usuario(email, password);

  if (currentUsersDB) {
    currentUsersDB.push(currentUser);
  } else {
    currentUsersDB = [currentUser];
  }
  localStorage.setItem("currentUsers", JSON.stringify(currentUsersDB));
}

//Chequear 
function checkEmailAndPassword(){
  if (email === ""){
    console.log("1");
    errRegMail.textContent = "Email esta vacio";
    errRegMail.style.color = "red";
    regMail.focus();
    return false;
  }
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(regMail.value)) {
    console.log("2");
    errRegMail.textContent = "El mail no se ha escrito de manera correcta";
    errRegMail.style.color = "red";
    regMail.focus();
    regMail.value="";
    return false;
  }
  if(regPass.value === ""){
    console.log("3");
    errRegPass.textContent = "Password esta vacio";
    errRegPass.style.color = "red";
    regPass.focus();
    return false;
  }
  return true;
}
function checkInDBLogin(email,pass){
  mailAndPass = usersDB.map(user => {
    if (email!=user.email){
      console.log("4");
      errRegMail.textContent = "Este mail no existe";
      errRegMail.style.color = "red";
      regMail.value="";
      regMail.focus();
      return false;
      
    }
    if(pass!=user.password){
      console.log("5");
      errRegPass.textContent = "Password incorrecto";
      errRegPass.style.color = "red";
      regPass.focus();
      return false;
    }
  crearCurrentUser(regMail.value,regPass.value)
  console.log("llego al return true");
	return true;
});
}