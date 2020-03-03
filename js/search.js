let datosSearch = document.forms[0][0];
let buttonSearch = document.getElementById("butSearch");
signupButton.addEventListener("click",search(datosSearch.value));

function search(nameSearch){
        fetch(`https://www.superheroapi.com/api.php/10219098893255282/search/${nameSearch}`)
      .then((response) => {
         const contentType = response.headers.get('content-type');
         if (!contentType || !contentType.includes('application/json')) {
           throw new TypeError("Oops, we haven't got JSON!");
         }
         return response.json();
      })
      .then((data) => {
          /* process your data further */
          console.log(data.results);
          

      })
      .catch((error) => console.error(error));    
    
}
