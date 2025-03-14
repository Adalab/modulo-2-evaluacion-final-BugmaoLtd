"use strict";

/* Cuando la usuaria hace click en el botón buscar
    Me conecto al API copn un fetch y recojo los datos del servidor
    En la url concateno el inputSearch. value para que solo me traiga los titulos que coinciden con el texto introducido en el campo de busqueda
    estar atenta al tipo de dato por si tiene que ser string o ponerse conParse
    Recojo la imagen en jpg? y el título
*/

const searchBtn = document.querySelector(".js-searchBtn");
const searchInput = document.querySelector(".js-searchInput");

const handleClick = (event) => {
  event.preventDefault();
  const searchInputValue = searchInput.value;
  fetch("https://api.jikan.moe/v4/anime?q=naruto")
    .then((response) => response.json())
    .then((data) => {
      const series = data.data;
      for (const serie of series) {
        const title = serie.title;
        const imageUrl = serie.images.jpg.image_url;
        console.log(title);
        console.log(imageUrl);
      }
    });
};

searchBtn.addEventListener("click", handleClick);
