//DATOS
let datosSearchHV1 =document.forms[0][0];
let datosSearchHV2 =document.forms[1][0];

let butSeaVS1 = document.getElementById("butSeaVS1");
let butSeaVS2 = document.getElementById("butSeaVS2");
let buttonVS = document.getElementById("butVS");

let buttonSearchHV1 = document.getElementById("butSeaVS1");
let buttonSearchHV2 = document.getElementById("butSeaVS2");

let divHV1 = document.querySelector(".divHV1");
let divHV2 = document.querySelector(".divHV2");
let result = document.getElementById("resultado");

let powerStats1 = [];
let powerStats2 = [];
let totalStats1 = 0;
let totalStats2 = 0;

//INICIADORES DEL BOTON
buttonSearchHV1.addEventListener("click", function(event) {
  
  event.preventDefault();
  searchHV1(datosSearchHV1.value);
  document.getElementsByTagName("img")[2].classList.remove("d-none");
});
buttonSearchHV2.addEventListener("click", function(event) {
  
  event.preventDefault();
  searchHV2(datosSearchHV2.value);
  document.getElementsByTagName("img")[4].classList.remove("d-none");
});

buttonVS.addEventListener("click", function(event) {
  
  event.preventDefault();
  elMasPoderoso(totalStats1,totalStats2);
});

//BUSQUEDA DEL PRIMERO
function searchHV1(nameSearch) {
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
      if (document.querySelector(".hv1")){
        divHV1.removeChild(divHV1.firstChild);
      }
      if (document.querySelector(".hvVictory")!=null){
        console.log("estoy aquí!");
        result.firstChild.remove();
      }
      var img = data.results[0].image.url;
      var name = data.results[0].name;
      var int = data.results[0].powerstats.intelligence;
      var stre = data.results[0].powerstats.strength;
      var speed = data.results[0].powerstats.speed;
      var dur = data.results[0].powerstats.durability;
      var pow = data.results[0].powerstats.power;
      var com = data.results[0].powerstats.combat;
      powerStats1.push(int)
      powerStats1.push(stre)
      powerStats1.push(speed)
      powerStats1.push(dur)
      powerStats1.push(pow)
      powerStats1.push(com)
      document.getElementsByTagName("img")[2].src=img;
      document.getElementsByTagName("h2")[0].innerText=`${name}`;
      let divTest=document.createElement('div');
      divTest.innerHTML = `<div class="hv1"><h4>Stats</h4><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${int}%;">Inteligencia: ${int}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar bg-danger" style="width: ${stre}%;">Fuerza ${stre}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${speed}%;">Velocidad: ${speed}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${dur}%;">Durabilidad: ${dur}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${pow}%;">Poder: ${pow}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${com}%;">Combate: ${com}</div></div></div>`;
      
      powerStats1.forEach(stat =>{
          totalStats1+=stat*1;
      });
        
        totalStats1= Math.floor(totalStats1/6);
        
        divHV1.appendChild(divTest);
        
        console.log(totalStats1);
        
    })
    .catch(error => console.error(error));
//   document.querySelector(".busqueda").classList.remove("d-none");
}


///BUSQUEDA DEL SEGUNDO
function searchHV2(nameSearch) {
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
        if (document.querySelector(".hv2")){
          divHV2.removeChild(divHV2.firstChild);
        }
        if (document.querySelector(".hvVictory")!=null){
          console.log("estoy aquí!");
          result.firstChild.remove();
          
        }
        

        var img = data.results[0].image.url;
        var name = data.results[0].name;
        var int = data.results[0].powerstats.intelligence;
        var stre = data.results[0].powerstats.strength;
        var speed = data.results[0].powerstats.speed;
        var dur = data.results[0].powerstats.durability;
        var pow = data.results[0].powerstats.power;
        var com = data.results[0].powerstats.combat;
        powerStats2.push(int)
        powerStats2.push(stre)
        powerStats2.push(speed)
        powerStats2.push(dur)
        powerStats2.push(pow)
        powerStats2.push(com)
        document.getElementsByTagName("img")[4].src=img;
        document.getElementsByTagName("h2")[1].innerText=`${name}`;
        let divTest=document.createElement('div');
        divTest.innerHTML = `<div class="hv2"><h4>Stats</h4><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${int}%;">Inteligencia: ${int}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar bg-danger" style="width: ${stre}%;">Fuerza ${stre}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${speed}%;">Velocidad: ${speed}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${dur}%;">Durabilidad: ${dur}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${pow}%;">Poder: ${pow}</div></div><br><div class="progress bg-secondary mb-3"><div class="progress-bar" style="width: ${com}%;">Combate: ${com}</div></div></div>`;
        
        powerStats2.forEach(stat =>{
            totalStats2+=stat*1;
        });
        
        totalStats2= Math.floor(totalStats2/6);
        
        divHV2.appendChild(divTest);
        console.log(totalStats2);
          
      })
      .catch(error => console.error(error));
  //   document.querySelector(".busqueda").classList.remove("d-none");
  }
function elMasPoderoso(hv1,hv2){
  if (document.querySelector(".hvVictory")){
    result.firstChild.remove();
  }
  let HV1 = document.getElementById("HV1").innerHTML; 
  let HV2 = document.getElementById("HV2").innerHTML;
  
  if (hv1>hv2){
    let hvVictory=document.createElement('h2');
    hvVictory.innerHTML=`${HV1} es más poderoso que ${HV2}`;
    result.appendChild(hvVictory);
    console.log(document.getElementById("HV1").innerHTML+"es más fuerte!");
  }else if(hv2>hv1){
    let hvVictory=document.createElement('h2');
    hvVictory.innerHTML=`${HV2} es más poderoso que ${HV1}`;
    hvVictory.classList.add("hvVictory");
    result.appendChild(hvVictory);

    console.log(document.getElementById("HV2").innerHTML+"es más fuerte!");
    
  }else if (hv2===hv1){
    let hvVictory=document.createElement('h2');
    hvVictory.innerHTML=`${HV1}, ${HV2} son igual de poderosos.`;
    result.appendChild(hvVictory);
    hvVictory.classList.add("hvVictory");
    console.log(document.getElementById("HV1").innerHTML+"son igual de fuertes!"+document.getElementById("HV2").innerHTML);
  }else{
    console.log("algo ha ido mal");
  }
}

function delete_row(e)
{
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}