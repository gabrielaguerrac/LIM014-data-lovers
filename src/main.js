//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


//import { allDataChampions } from './data.js';
import data from './data/lol/lol.js';
import {orderChampions, filterChampions } from './data.js';



document.getElementById("firstNavigator").style.display= "block";
document.getElementById("secondNavigator").style.display= "none";
document.getElementById("storage").style.display="none";
document.getElementById("modalContainer").style.display = "none";
document.querySelector(".aboutLol").style.display = "none";

const storage = document.getElementById('storage');
const searchBar = document.getElementById("searchBar");
const entries = Object.entries(data.data);
const modalContainer = document.getElementById("modalContainer");

//PARA EL CAMBIO DE PAGINA - AL DAR CLICK EN EL MENU DORADITO A CAMPEONE

document.getElementById("champions").addEventListener("click", function() {
    document.getElementById("secondNavigator").style.display= "block";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page2-Champions");
    document.getElementById("body").classList.remove("page3-Statistics");
    document.getElementById("body").classList.remove("page4-InfoAbout");
    document.getElementById("storage").style.display="block";
    
    const showChampions = (champions) => {
        let htmlString = champions.map((element)  => {
          
          //console.log(element);
            let propChamp =  element[1];
            let tags = Object.values(propChamp.tags);
            let infoKeys = Object.keys(propChamp.info);
            let infoValues = Object.values(propChamp.info);
            //console.log(info);
            // console.log(propChamp);  
          return   `
          <article class=${propChamp.name}>
            <a  href="#${propChamp.key}">
                <img class="card" src="${propChamp.splash}"></img>
            </a>
            <h3>${propChamp.name}</h3> 
          </article>   
          
          <section id="${propChamp.key}" class="modalDialog">
            <section>
                <a href="#close" title="Close" class="close">X</a>
                <img class="modalImg" src="${propChamp.splash}"></img>
                <p class="modalTitle">${propChamp.title}</p>
                <h2 class="modalName">${propChamp.name}</h2>
                <p class="modalBlurb">· ${propChamp.blurb}</p>
                <p class="modalTags">· Roles: ${tags}</p>
                <table class="modalInfo"> 
                    <tr>
                        <th>${infoKeys[0]}</th>
                        <th>${infoKeys[1]}</th>
                        <th>${infoKeys[2]}</th>
                        <th>${infoKeys[3]}</th>
                    </tr>
                    <tr>
                        <td>${infoValues[0]}</td>
                        <td>${infoValues[1]}</td>
                        <td>${infoValues[2]}</td>
                        <td>${infoValues[3]}</td>
                    </tr>
                </table>
                
            </section>
         </section>`
        } )
       // console.log(htmlString);
        storage.innerHTML = htmlString;  
        }
      showChampions(entries);

    //FUNCION DE LA BARRA: BUSCAR X NOMBRE
    searchBar.addEventListener("keyup", (e) =>{
        const searchValue = e.target.value.toLowerCase();
        
        let filteredChampions = entries.filter(element => {
          let propChamp =  element[1];
          //console.log(propChamp);
         return propChamp.name.toLowerCase().includes(searchValue);
        })
        showChampions(filteredChampions);
        //console.log(filteredChampions);
      });
    

    //FUNCION FILTER X ROL
      document.getElementById("allRoles").addEventListener("change", (e)=>{
        const roleSelected = e.target.value;

        if(roleSelected == 'All'){
            //showChampions(entries);//cambiar
            //console.log("hago algo cuando seleccionas All");
            return showChampions(entries); //devuelve un objeto
        }else{
        //const filterRoles;
        //console.log(e);
        let filterRoles = (filterChampions(entries, roleSelected));
        
        // if(roleSelected == 'All'){
        //     showChampions(entries);
        // }else{
        //   //console.log(roleSelected);

        // const filterRoles= entries.filter(element => {
        //   let propChamp =  element[1];
        //   let dos = propChamp.tags;
        //  return dos.includes(roleSelected);
                
        // })

        console.log(typeof filterRoles);
        showChampions(filterRoles);
        }
      
        });
        
      

      //FUNCION SORT AZ-ZA
      document.getElementById("order").addEventListener("change", (e) => {
        
        let ele = e.target.value;
        let dataKeys =Object.keys(data.data);
        //for(let prueba in dataKeys){
            // console.log(prueba)
            //let propChampion = dataKeys[prueba];
            //let propChamp = propChampion[1];

            // orderChampions(propChampion,ele)
            // console.log();
        //}
        // let name = dataKeys.name;
        // console.log()
        
        let orderedChamps = (orderChampions(entries, ele));
        console.log(orderedChamps)
        //orderChampions(,ele)
        showChampions(orderedChamps);
    } 
    );
   
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
    document.querySelector(".aboutLol").style.display= "block";

   //const dataAllChampions = Object.values(data);
   
});

document.getElementById("lolIcon").addEventListener("click",
function(){
    location.reload();
}
)



//AL HACER CLICK EN EL MODAL: no modificado, no funciona

document.getElementById("modalContainer").addEventListener("click",
function(){
    document.getElementById("modalContainer").style.display= "none"; 
}
)

// document.getElementById("order").addEventListener("change", (element) => {
//     //console.log(element.target.value)

//     //let ordering;

//     let trial =Object.keys(data.data)
    
//     if(element.target.value == "aZ"){
//        //ordering = true
        

//         //console.log(trial)
        
//         // trial.sort((a,b)=>{ 
//         //     //const nameA = a.name.toLowerCase();
//         //     //const nameB = b.name.toLowerCase();

//         //     if (a>b){
//         //         return 1;
//         //     }
//         //     if (a<b){
//         //         return -1;
//         //     }

//         //     return 0;

            
//         // })
//         // console.log(trial)

//         console.log(trial);
//         console.log(typeof trial);// trial es un array de strings
//         console.log(trial[3]);

//         // for (let keys in trial) {
  
//         //     let objectChampions = trial[keys];
//         //     console.log(typeof objectChampions);
              
         
  
//             trial.sort((a,b)=>{ 
//                 const nameA = trial.toLowerCase();
//                 const nameB = trial.toLowerCase();

//                 if (nameA>nameB){
//                     return 1;

//                 }else { 
//                     return -1;
//                 }     
       
//              });            
//         }
    

    

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

  