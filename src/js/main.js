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
// let favouriteSeriesList = document.querySelector(".js-favourite-series-list");

function renderSeries(series) {
  for (const serie of series) {
    const imageSrc = serie.images.jpg.image_url.src;
    if (
      imageSrc ===
      "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    ) {
      seriesList.innerHTML += ` <li class = "js-series serie" id="${serie.mal_id}">
    <div class="container__serie"><img class="serie__image" src="./images/logo-adalab.png" alt="">
    <h2 class="serie__title">${serie.title}</h2> </div>
  </li>`;
    } else {
      seriesList.innerHTML += ` <li class = "js-series serie" id="${serie.mal_id}">
      <div class="container__serie"><img class="serie__image" src="${serie.images.jpg.image_url}" alt="">
      <h2 class="serie__title">${serie.title}</h2></div>
    </li>`;
    }

    const allSeries = document.querySelectorAll(".js-series");
    for (const singleSerie of allSeries) {
      singleSerie.addEventListener("click", handleFavourites);
    }
  }
}

let favouriteSeriesList = [];

function handleFavourites(event) {
  const idSerieClick = event.currentTarget.id;
  console.log(seriesList);

  //No me trae el valor del id de series.mal_id ni series[mal_id]
  // y por eso no funciona el find ni todo lo demás

  const selectedSerie = seriesList.find((serie) => {
    return serie.mal_id === idSerieClick;
  });

  favouriteSeriesList.push(selectedSerie);
  // console.log(favouriteSeriesList);

  for (const favouriteSerie of favouriteSeriesList) {
    favouriteSeriesList.innerHTML += ` <li class = "js-series serie" id="${serie.mal_id}">
      <div class="container__serie"><img class="serie__image" src="${serie.images.jpg.image_url}" alt="">
      <h2 class="serie__title">${serie.title}</h2></div></li>`;
  }
}

const handleClick = (event) => {
  event.preventDefault();
  seriesList.innerHTML = "";
  const searchInputValue = searchInput.value;
  fetch("https://api.jikan.moe/v4/anime?q=" + searchInputValue)
    .then((response) => response.json())
    .then((data) => {
      const series = data.data;
      renderSeries(series);
    });
};

searchBtn.addEventListener("click", handleClick);
