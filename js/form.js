let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let password=document.getElementById("password");
let repeatPassword=document.getElementById("repeat-password");
let signupButton=document.getElementById("signup-button");
let loginButton=document.getElementById("login-button");

let usersDB = JSON.parse(localStorage.getItem('users'));

function crearUsuario(name,email,phone,password){
    const nuevoUsuario = new Usuario (name,email,phone,password);

    if(usersDB){
        usersDB.push(nuevoUsuario);
    }else{
        usersDB = [nuevoUsuario];
    }
    localStorage.setItem('users', JSON.stringify(usersDB));

}

signupButton.addEventListener("click",function (event){
    event.preventDefault();
    validandoRegistro();
    crearUsuario(name.value, email.value, password.value);

})
function validandoRegistro(){  
    var name=name.value;  
    var password=password.value;  
      
    if (name==null || name=="" ||){  
      alert("El nombre esta en blanco");  
      return false;  
    }else if(password.length<6){  
      alert("La contraseña al menos debe de tener 6 letras.");  
      return false;  
      }  
    }  







