//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


//import { example } from './data.js';
import data from './data/lol/lol.js';

document.getElementById("firstNavigator").style.display= "block";
document.getElementById("secondNavigator").style.display= "none";
document.getElementById("storage").style.display="none";


//PARA EL CAMBIO DE PAGINA - AL DAR CLICK EN EL MENU DORADITO A CAMPEONES
document.getElementById("champions").addEventListener("click", function() {
    document.getElementById("secondNavigator").style.display= "block";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page2-Champions");
    document.getElementById("body").classList.remove("page3-Statistics");
    document.getElementById("body").classList.remove("page4-InfoAbout");
    document.getElementById("storage").style.display="block";
    
   //const dataAllChampions = Object.values(data);

    
    const section = document.getElementById('storage');
    let claves = Object.keys(data.data); 
    
    for(let i=0; i< claves.length; i++){
      let clave = claves[i];
      let key1 = data.data[clave];
      
      const article = document.createElement('article');
      const champName = document.createElement('h3');
      const img = document.createElement('img');
      img.setAttribute("src", key1.splash);
      img.setAttribute("class", "card");
    
      
      champName.textContent=key1.id;
      
      article.appendChild(img);
      article.appendChild(champName);
    
      section.appendChild(article);
      //console.log(key1.id);
    }
   
});


//AL DAR CLICK EN ESTADISTICA CAMBIO IMAGEN FONDO ETC
document.getElementById("statistics").addEventListener("click", function() {
    document.getElementById("secondNavigator").style.display= "none";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page3-Statistics");
    document.getElementById("body").classList.remove("page2-Champions");
    document.getElementById("body").classList.remove("page4-InfoAbout");
    document.getElementById("storage").style.display= "none";
   //const dataAllChampions = Object.values(data);
   
});

document.getElementById("about").addEventListener("click", function() {
    document.getElementById("secondNavigator").style.display= "none";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page4-InfoAbout");
    document.getElementById("body").classList.remove("page3-Statistics");
    document.getElementById("body").classList.remove("page2-Champions");
    document.getElementById("storage").style.display= "none";
   //const dataAllChampions = Object.values(data);
   
});

document.getElementById("lolIcon").addEventListener("click",
function(){
    location.reload();
}
)

// addEventListener("DOMContentLoaded", () => {
//     const hamburgerBtn = document.querySelector(".hamburgerBtn")
//     if (hamburgerBtn) {
//         hamburgerBtn.addEventListener('click', () =>{
//             const menuCel = document.querySelector(".menu");
//             menuCel.classList.toggle("show")
//         })
//     }
// }
//PARTE CELULAR

// document.querySelector(".fas fa-bars").addEventListener("click", function(){
//     document.getElementsByClassName("menuCel").style.display = "block";
// })

//console.log(data);
