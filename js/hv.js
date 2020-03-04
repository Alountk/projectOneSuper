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
        url=data.image.url;
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
        
        // console.log(altura[1]);
        counter++;
        }
        

    )
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
function doesFileExist()
{
  const key = "10219098893255282";
  var counter = 1;
  for (var i=0;i<8;i++){
    var id =Math.floor(Math.random()*730);
    fetch(`https://superheroapi.com/api.php/${key}/${id}`)
    .then((response) =>{
      const contentType = response.headers.get('content-type');
       if (!contentType || !contentType.includes('application/json')) {
         throw new TypeError("Oops, we haven't got JSON!");
       }
      return response.json();
    }).then((data)=>{
      var urlImg = data.image.url;
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', urlImg, false);
      xhr.send();
      if (xhr.status == "404"){
        console.log("El archivo no existe");
        return false
      }else{
        console.log("Existe");
        return true
      }
    });

  }
  // /*
  //   fetch(urlToFile)
  //   .then(response)
  // */
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('HEAD', urlToFile, false);
  //   xhr.send();

  //   if (xhr.status == "404") {
  //       console.log("File doesn't exist");
  //       return false;
  //   } else {
  //       console.log("File exists");
  //       return true;
  //   }
}