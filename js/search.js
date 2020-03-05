let datosSearch = document.forms[0][0];
let buttonSearch = document.getElementById("btn-search");
let busCont = document.getElementById("busqueda");
buttonSearch.addEventListener("click", function(event) {
  console.log("llego al boton");
  event.preventDefault();
  search(datosSearch.value);
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
        divTest.innerHTML = `<div><img class="HV-img" src="${img}" alt=""><p>Nombre completo: ${info.biography["full-name"]} <br>Publisher:${info.biography.publisher}<br>Primera aparicion: ${info.biography["first-appearance"]}<br>Ocupación:${info.work.occupation}<br>Base de operaciones:${info.work.base} </p></div>`;
        busCont.appendChild(divTest);
      });

      // let counter=1;
      // for (i=0;i<data.results.length;i++){
      //   console.log("llego "+i);
      //   url=data.results.image.url;
      //   // doesFileExist(url);
      //   name=data.name;
      //   console.log(name);
      //   const fN="full-name";
      //   fullName=data.biography[fN];
      //   altura=data.appearance.height;
      //   const fA="first-appearance";
      //   primeraAparicion=data.biography[fA];
      //   let divInfo =`<div><img src="${url}"><p>Nombre completo: ${fullName} <br>Publisher:${data.biography.publisher}<br>Primera aparicion: ${primeraAparicion}<br>Ocupación:${data.work.occupation}<br>Base de operaciones:${data.work.base} </p></div>`;
      //   console.log(busCont);
      //   busCont.appendChild(divInfo);

      // }
    })
    .catch(error => console.error(error));
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