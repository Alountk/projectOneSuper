function callSuperHeroe1(){
    const key = "10219098893255282";
    var counter = 1;
    for (var i=0;i<8;i++){
        var id =Math.floor(Math.random()*730);
        fetch(`https://superheroapi.com/api.php/${key}/${id}`)
      .then((response) => {
         const contentType = response.headers.get('content-type');
         if (!contentType || !contentType.includes('application/json')) {
           throw new TypeError("Oops, we haven't got JSON!");
         }
         return response.json();
      })
      .then((data) => {
          /* process your data further */
          
          console.log(data);
          name=data.name;
          cambiarNombre(name,counter);
          url=data.image.url;
          cambiarImagenes(url,counter);
          fN="full-name";
          fullName=data.biography.fN;
          console.log(fullName);
          let divInfo =`<div><p>Publisher:${data.biography.publisher}<br>Primera aparicion:--falta--<br>Ocupación:${data.work.occupation}<br>Base de operaciones:${data.work.base} </p></div>`;
          intDiv(divInfo,counter);
          altura=data.appearance.height;
          console.log(altura[1]);
          counter++;

      })
      .catch((error) => console.error(error));    
    }
    
}

callSuperHeroe1();
function cambiarImagenes(url,numeroPJ){
  let img = document.querySelector(".img"+numeroPJ);
  img.src=url;
}
function cambiarNombre(nombre,numeroPJ){
  let info = document.querySelector(".h3"+numeroPJ);
  info.innerHTML=nombre;
}
function intDiv(div,numeroPJ){
  let info = document.querySelector(".div"+numeroPJ);
  info.innerHTML=div;
}