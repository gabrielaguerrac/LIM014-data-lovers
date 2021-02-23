//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


//import { allDataChampions } from './data.js';
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
    

    function showingChamps(champion, storage, modalContainer){


        for (let keyChampions in champion){
            let objectChampions = champion[keyChampions];
            //console.log(typeof objectChampions);
            
            let propertiesChamp = objectChampions[1];
            //console.log(typeof propertiesChamp);
                
            const article = document.createElement('article');
            article.setAttribute("class", "cardContainer");
            const champName = document.createElement('h3');
            const img = document.createElement('img');
            img.setAttribute("src" , propertiesChamp.splash);
            img.setAttribute("class", "cardImg");
            
            champName.textContent=propertiesChamp.id;
            
            article.appendChild(img);
            article.appendChild(champName);
            
            storage.appendChild(article);

      article.addEventListener("click", ()=>{
          modalContainer.style.display = "block";

          const modal = document.createElement("article");
          modal.setAttribute("class", "modal");
          const imgChampion = document.createElement('img');
          imgChampion.setAttribute("src", propertiesChamp.splash);
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

          titleModal.textContent = propertiesChamp.title;
          nameModal.textContent = propertiesChamp.name;
          descriptionModal.textContent = propertiesChamp.blurb;
          infoModal.textContent = " Info:" + Object.entries(propertiesChamp.info);
          tagsModal.textContent = "Roles: " + propertiesChamp.tags;

          modal.appendChild(imgChampion);
          modal.appendChild(titleModal);
          modal.appendChild(nameModal);
          modal.appendChild(descriptionModal);
          modal.appendChild(infoModal);
          modal.appendChild(tagsModal);
         
          modalContainer.appendChild(modal);
      })
    }

}
    showingChamps((Object.entries(data.data)), storage, modalContainer);
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

//AL HACER CLICK EN EL MODAL:

document.getElementById("modalContainer").addEventListener("click",
function(){
    document.getElementById("modalContainer").style.display= "none"; 
}
)

// document.getElementById("order").addEventListener("change", (element) => {

//     if(element.target.value == "Za"){
        
//         let trial =Object.keys(data.data)
//         //console.log(trial)
        
//         trial.sort((a,b)=>{ 
//             //const nameA = a.name.toLowerCase();
//             //const nameB = b.name.toLowerCase();

//             if (a>b){
//                 return 1;
//             }
//             if (a<b){
//                 return -1;
//             }

//             return 0;

            
//         })
//         console.log(trial)


//         for (let keys in trial) {
  
//             let objectChampions = trial[keys];
//             //  console.log(objectChampions);
              
//             let propertiesChamp = objectChampions;

//             //console.log(propertiesChamp);
  
//             propertiesChamp.sort((a,b)=>{ 
//                 const nameA = a.name.toLowerCase();
//                 const nameB = b.name.toLowerCase();

//                 if (nameA>nameB){
//                     return 1;
//                 }
//                 if (nameA<nameB){
//                     return -1;
//                 }

//                 return 0;

                
//             })
//             //console.log(propertiesChamp)
//         }
          
  
//     } else { 
//         return 
//     }
    
  

// })

document.getElementById("allRoles").addEventListener("change", (element) => {

    if(element.target.value == "assassin"){

        let role = Object.entries(data.data)
        console.log ( role)

        var newArr =  role[01].filter(function(element) {

            let trial = 
            return(trial)
        }
        
        );
        console.log(newArr)
    }

});

displayCharacters(data.data)

//CODIGO FARES
   //function prueba1 (arreglo, domElement, sentido){
    //let claves;
    // if(sentido == true){

    // claves = Object.keys(arreglo);
    // }else{
    //  claves = Object.keys(arreglo).reverse();
    // } //primer data del import segundo data es el data que contiene data
//console.log(claves); //segun la estructura lol.js data solo muestra los nombres de los campeoens, estos a su vez son objetos con mas atributos

    // for(let i=0; i< claves.length; i++){//length 134 campeones
    // let clave = claves[i];
//   console.log(clave);//claves [i]sigue siendo el nombre de los obj dentro de data (nombre del campeon)
  //let key1 = arreglo[clave];
//   console.log(key1);//va a almacenar en key1 toda la data de clave. clave obj del champion. data.data la data del objeto que este en [i]
  
  
//   const article = document.createElement('article');
//   const champName = document.createElement('h3');
//   const img = document.createElement('img');
//   img.setAttribute("src", key1.splash);//le estoy especificando que de toda la data del champ me traiga la del atributo splash
//   img.setAttribute("class", "card");//setAttribute("nombreAtributo","valorDelAtributo")

//   champName.textContent=key1.id;//key1.id es el nombre del champ como atributo no como obj
  
  
//   article.appendChild(img);
//   article.appendChild(champName);

  

//   domElement.appendChild(article);

//} 

//}
   
  //console.log(key1.id);
  //prueba1(data.data, section, false);

  