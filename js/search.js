let datosSearch = document.forms[0][0];
let buttonSearch = document.getElementById("btn-search");
let busCont = document.getElementById("busqueda");
let butDesea1 = document.querySelector(".desea1");
let butDesea2 = document.querySelector(".desea2");
let butDesea3 = document.querySelector(".desea3");
buttonSearch.addEventListener("click", function(event) {
  console.log("llego al boton");
  event.preventDefault();
  search(datosSearch.value);
});
butDesea1.addEventListener("click", function(event) {
  console.log("llego al boton");
  event.preventDefault();
  searchCustom(document.querySelector("#name1").innerHTML);
});
butDesea2.addEventListener("click", function(event) {
  console.log("llego al boton");
  event.preventDefault();
  searchCustom(document.querySelector("#name2").innerHTML);
});
butDesea3.addEventListener("click", function(event) {
  console.log("llego al boton");
  event.preventDefault();
  searchCustom(document.querySelector("#name3").innerHTML);
});

function search(nameSearch) {
  fetch(
    `https://www.superheroapi.com/api.php/10219098893255282/search/${nameSearch}`
  )
    .then(response => {
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
    })
    .then(data => {
      /* process your data further */
      data.results.forEach(info => {
        console.log(info);
        var img = info.image.url;
        let divTest=document.createElement('div');
        divTest.innerHTML = `<div class="text-left ml-2 mr-2"><img class="HV-img" src="${img}" alt=""><h3>${info.name}</h3><p class="p-style text-left"> Nombre completo: ${info.biography["full-name"]} <br>Publisher:${info.biography.publisher}<br>Primera aparicion: ${info.biography["first-appearance"]}<br>Ocupación:${info.work.occupation}<br>Base de operaciones:${info.work.base} </p></div>`;
        busCont.appendChild(divTest);
      });
    })
    .catch(error => console.error(error));
  document.querySelector(".busqueda").classList.remove("d-none");
}
function searchCustom(nameSearch) {
  console.log(nameSearch);
  fetch(
    `https://www.superheroapi.com/api.php/10219098893255282/search/${nameSearch}`
  )
    .then(response => {
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
        var img = data.results[0].image.url;
        let divTest=document.createElement('div');
        divTest.innerHTML = `<div class="text-left ml-2 mr-2"><img class="HV-img" src="${img}" alt=""><h3>${data.results[0].name}</h3><p class="p-style text-left">Nombre completo: ${data.results[0].biography["full-name"]} <br>Publisher:${data.results[0].biography.publisher}<br>Primera aparicion: ${data.results[0].biography["first-appearance"]}<br>Ocupación:${data.results[0].work.occupation}<br>Base de operaciones:${data.results[0].work.base} </p></div>`;
        busCont.appendChild(divTest);
      });
  document.querySelector(".busqueda").classList.remove("d-none");
}








function intDiv(div, numeroPJ) {
  let info = document.querySelector(".div" + numeroPJ);
  info.innerHTML = div;
}
function cambiarNombre2(nombre, numeroPJ) {
  let info = document.querySelector(".h3" + numeroPJ);
  info.innerHTML = nombre;
}
function cambiarImagenes(url, numeroPJ) {
  let img = document.querySelector(".img" + numeroPJ);
  img.src = url;
}

