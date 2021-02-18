//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


//import { example } from './data.js';
import data from './data/lol/lol.js';

document.getElementById("firstNavigator").style.display= "block";
document.getElementById("secondNavigator").style.display= "none";
document.getElementById("storage").style.display="none";
document.getElementById("modalContainer").style.display = "none";


//PARA EL CAMBIO DE PAGINA - AL DAR CLICK EN EL MENU DORADITO A CAMPEONES
const storage = document.getElementById("storage");
const modalContainer = document.getElementById("modalContainer");
document.getElementById("champions").addEventListener("click", function() {
    document.getElementById("secondNavigator").style.display= "block";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page2-Champions");
    document.getElementById("body").classList.remove("page3-Statistics");
    document.getElementById("body").classList.remove("page4-InfoAbout");
    document.getElementById("storage").style.display="block";
    
   //const dataAllChampions = Object.values(data);

    
    
    let claves = Object.keys(data.data); //primer data del import segundo data es el data que contiene data
    //console.log(claves); segun la estructura lol.js data solo muestra los nombres de los campeoens, estos a su vez son objetos con mas atributos
    
    for(let i=0; i< claves.length; i++){ //length 134 campeones
      let clave = claves[i];
      //   console.log(clave);//claves [i]sigue siendo el nombre de los obj dentro de data (nombre del campeon)
      let key = data.data[clave];
      //   console.log(key1);//va a almacenar en key1 toda la data de clave. clave obj del champion. data.data la data del objeto que este en [i]
      
      const article = document.createElement('article');
      article.setAttribute("class", "cardContainer");
      const champName = document.createElement('h3');
      const img = document.createElement('img');
      img.setAttribute("src", key.splash);//le estoy especificando que de toda la data del champ me traiga la del atributo splash
      img.setAttribute("class", "cardImg");//setAttribute("nombreAtributo","valorDelAtributo")
    
      
      champName.textContent=key.id;//key1.id es el nombre del champ como atributo no como obj
      
      article.appendChild(img);
      article.appendChild(champName);
    
      storage.appendChild(article);
      //console.log(key1.id);

      article.addEventListener("click", ()=>{
          modalContainer.style.display = "block";

          const modal = document.createElement("article");
          modal.setAttribute("class", "modal");
          const imgChampion = document.createElement('img');
          imgChampion.setAttribute("src", key.splash);
          imgChampion.setAttribute("class", "modalImg");

          const nameModal = document.createElement("h1");
          const titleModal = document.createElement("h2");
          const descriptionModal = document.createElement("p");
          const infoModal = document.createElement("p");
          const tagsModal = document.createElement("p");

          titleModal.setAttribute("class", "modalTitle");
          nameModal.setAttribute("class", "modalName");
          descriptionModal.setAttribute("class", "modalDescription");
          infoModal.setAttribute("class", "modalInfo");
          tagsModal.setAttribute("class", "modalTags");

          titleModal.textContent = key.title;
          nameModal.textContent = key.name;
          descriptionModal.textContent = key.blurb;
          infoModal.textContent = key.info;
          tagsModal.textContent = "Roles: " +key.tags;

          modal.appendChild(imgChampion);
          modal.appendChild(titleModal);
          modal.appendChild(nameModal);
          modal.appendChild(descriptionModal);
          modal.appendChild(infoModal);
          modal.appendChild(tagsModal);
         
          modalContainer.appendChild(modal);
      })
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



