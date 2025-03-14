"use strict";

/* Cuando la usuaria hace click en el botón buscar
    Me conecto al API copn un fetch y recojo los datos del servidor
    En la url concateno el inputSearch. value para que solo me traiga los titulos que coinciden con el texto introducido en el campo de busqueda
    estar atenta al tipo de dato por si tiene que ser string o ponerse conParse
    Recojo la imagen en jpg? y el título
*/

const searchBtn = document.querySelector(".js-searchBtn");
const searchInput = document.querySelector(".js-searchInput");
const seriesList = document.querySelector(".js-list");

const handleClick = (event) => {
  event.preventDefault();
  seriesList.innerHTML = "";
  const searchInputValue = searchInput.value;
  fetch("https://api.jikan.moe/v4/anime?q=" + searchInputValue)
    .then((response) => response.json())
    .then((data) => {
      const series = data.data;
      for (const serie of series) {
        if (
          serie.images.jpg.image_url.src ===
          "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
        ) {
          seriesList.innerHTML += ` <li>
        <img src="./images/logo-adalab.png" alt="">
        <h2>${serie.title}</h2>
      </li>`;
        } else {
          seriesList.innerHTML += ` <li>
          <img src="${serie.images.jpg.image_url}" alt="">
          <h2>${serie.title}</h2>
        </li>`;
        }
      }
    });
};

searchBtn.addEventListener("click", handleClick);
