"use strict";

const searchBtn = document.querySelector(".js-searchBtn");
const searchInput = document.querySelector(".js-searchInput");
const seriesList = document.querySelector(".js-list");
const localStorageFavourites = JSON.parse(
  localStorage.getItem("favouriteList")
);
const resetBtn = document.querySelector(".js-resetBtn");
let favouriteSeriesList = document.querySelector(".js-favourite-series-list");

let series = [];
let favouriteSeries = localStorageFavourites || [];

renderFavourites();

function renderSeries(series) {
  seriesList.innerHTML = "";

  for (const serie of series) {
    const imageSrc = serie.images.jpg.image_url.src;
    if (
      imageSrc ===
      "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    ) {
      seriesList.innerHTML += `
        <li class="js-series serie" id="${serie.mal_id}">
          <div class="container__serie">
            <img class="serie__image" src="./images/logo-adalab.png" alt="">
            <h2 class="serie__title">${serie.title}</h2>
          </div>
        </li>`;
    } else {
      seriesList.innerHTML += `
        <li class="js-series serie" id="${serie.mal_id}">
          <div class="container__serie">
            <img class="serie__image" src="${serie.images.jpg.image_url}" alt="">
            <h2 class="serie__title">${serie.title}</h2>
          </div>
        </li>`;
    }
    const seriesNumber = series.length;
    console.log(seriesNumber);
  }

  const allSeries = document.querySelectorAll(".js-series");
  for (const singleSerie of allSeries) {
    singleSerie.addEventListener("click", handleFavourites);
  }
}

function handleFavourites(event) {
  const idSerieClick = parseInt(event.currentTarget.id);

  const selectedSerie = series.find((serie) => serie.mal_id === idSerieClick);

  if (!favouriteSeries.includes(selectedSerie)) {
    favouriteSeries.push(selectedSerie);
    event.currentTarget.classList.add("changefavourite");
  }
  renderFavourites();
}

function renderFavourites() {
  favouriteSeriesList.innerHTML = "";

  for (const favouriteSerie of favouriteSeries) {
    favouriteSeriesList.innerHTML += `
      <li class="js-series serie" id="${favouriteSerie.mal_id}">
        <div class="container__serie__fav">
          <img class="serie__image__fav" src="${favouriteSerie.images.jpg.image_url}" alt="">
          <h2 class="serie__title">${favouriteSerie.title}</h2>
        </div>
      </li>`;
  }
  localStorage.setItem("favouriteList", JSON.stringify(favouriteSeries));
}

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  seriesList.innerHTML = "";
  favouriteSeriesList.innerHTML = "";
  favouriteSeries = [];
  localStorage.removeItem("favouriteList");
});

const handleClick = (event) => {
  event.preventDefault();
  seriesList.innerHTML = "";
  const searchInputValue = searchInput.value;

  fetch("https://api.jikan.moe/v4/anime?q=" + searchInputValue)
    .then((response) => response.json())
    .then((data) => {
      series = data.data;
      renderSeries(series);
    });
};

searchBtn.addEventListener("click", handleClick);
