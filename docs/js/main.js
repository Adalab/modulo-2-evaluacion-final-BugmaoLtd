const o=document.querySelector(".js-searchBtn"),u=document.querySelector(".js-searchInput"),t=document.querySelector(".js-list"),d=JSON.parse(localStorage.getItem("favouriteList"));let l=document.querySelector(".js-favourite-series-list"),a=[],r=d||[];c();function m(i){t.innerHTML="";for(const e of i)e.images.jpg.image_url.src==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"?t.innerHTML+=`
        <li class="js-series serie" id="${e.mal_id}">
          <div class="container__serie">
            <img class="serie__image" src="./images/logo-adalab.png" alt="">
            <h2 class="serie__title">${e.title}</h2>
          </div>
        </li>`:t.innerHTML+=`
        <li class="js-series serie" id="${e.mal_id}">
          <div class="container__serie">
            <img class="serie__image" src="${e.images.jpg.image_url}" alt="">
            <h2 class="serie__title">${e.title}</h2>
          </div>
        </li>`;const s=document.querySelectorAll(".js-series");for(const e of s)e.addEventListener("click",g)}function g(i){const s=parseInt(i.currentTarget.id),e=a.find(n=>n.mal_id===s);r.includes(e)||r.push(e),c()}function c(){l.innerHTML="";for(const i of r)l.innerHTML+=`
      <li class="js-series serie" id="${i.mal_id}">
        <div class="container__serie">
          <img class="serie__image" src="${i.images.jpg.image_url}" alt="">
          <h2 class="serie__title">${i.title}</h2>
        </div>
      </li>`;localStorage.setItem("favouriteList",JSON.stringify(r))}const _=i=>{i.preventDefault(),t.innerHTML="";const s=u.value;fetch("https://api.jikan.moe/v4/anime?q="+s).then(e=>e.json()).then(e=>{a=e.data,m(a)})};o.addEventListener("click",_);
//# sourceMappingURL=main.js.map
