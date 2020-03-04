
let datosSearch = document.forms[0][0];
let buttonSearch = document.getElementById("butSearch");
buttonSearch.addEventListener("click",function(event) {
  event.preventDefault();
  search(datosSearch.value);
});




function search(nameSearch){
        fetch(`https://www.superheroapi.com/api.php/10219098893255282/search/${nameSearch}`)
      .then((response) => {
        console.log(response);
         const contentType = response.headers.get('content-type');
         if (!contentType || !contentType.includes('application/json')) {
           throw new TypeError("Oops, we haven't got JSON!");
         }
         return response.json();
      })
      .then((data) => {
          /* process your data further */
          console.log(data.results);
          console.log(data.results.length);
        ventanaNueva("./search.html",nameSearch);
        let counter=1;
        for (i=0;i<data.results.length;i++){
          url=data.results.image.url;
          // doesFileExist(url);
          name=data.name;
          cambiarNombre(name,counter);
          cambiarImagenes(url,counter);
          const fN="full-name";
          fullName=data.biography[fN];
          altura=data.appearance.height;
          const fA="first-appearance";
          primeraAparicion=data.biography[fA];
          let divInfo =`<div><p>Nombre completo: ${fullName} <br>Publisher:${data.biography.publisher}<br>Primera aparicion: ${primeraAparicion}<br>Ocupación:${data.work.occupation}<br>Base de operaciones:${data.work.base} </p></div>`;
          intDiv(divInfo,counter);
        }

          
          

      })
      .catch((error) => console.error(error));    
    
}
function ventanaNueva (url,name){
  window.open(url,`Resultado de busqueda ${name}`,)
  }
function intDiv(div,numeroPJ){
  let info = document.querySelector(".div"+numeroPJ);
  info.innerHTML=div;
}
function cambiarNombre(nombre,numeroPJ){
  let info = document.querySelector(".h3"+numeroPJ);
  info.innerHTML=nombre;
}
function cambiarImagenes(url,numeroPJ){
  let img = document.querySelector(".img"+numeroPJ);
  img.src=url;
}