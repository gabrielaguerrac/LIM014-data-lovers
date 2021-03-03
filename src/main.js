import data from './data/lol/lol.js';
import {orderChampions, filterChampions, computeStats } from './data.js';



//VISTA INICIO
document.getElementById("firstNavigator").style.display= "block";
document.getElementById("secondNavigator").style.display= "none";
document.getElementById("storage").style.display="none";
document.getElementById("modalContainer").style.display = "none";
document.getElementById("aboutLol").style.display = "none";
document.getElementById("minMax").style.display="none";
//document.getElementById("downloadGame").addEventListener("click", function() );

const storage = document.getElementById("storage");
const searchBar = document.getElementById("searchBar");
//const entries = Object.entries(data.data);
const newData = Object.values(data.data);//{version:...}


//VISTA CHAMPIONS
    document.getElementById("champions").addEventListener("click", function() {
    document.getElementById("secondNavigator").style.display= "block";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page2-Champions");
    document.getElementById("body").classList.remove("page3-Statistics");
    document.getElementById("body").classList.remove("page4-InfoAbout");
    document.getElementById("storage").style.display="block";
    document.getElementById("minMax").style.display="none";

    const showChampions = (champions) => {
        let htmlString = champions.map((propChamp)  => {
          //console.log(propChamp);
            
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
        })
       // console.log(htmlString);
        storage.innerHTML = htmlString;  
      }

      showChampions(newData);
      
      let notFound= `<i class="fab fa-searchengin"></i><h2>NO EXISTE</h2>`

    //FUNCION BUSCAR POR NOMBRE
    searchBar.addEventListener("keyup", (e) =>{
        const searchValue = e.target.value.toLowerCase();
        
         let filteredChampions = newData.filter(element => {
         
          //console.log(propChamp);
         return element.name.toLowerCase().includes(searchValue);
        })
        if(filteredChampions == false){
          return storage.innerHTML = notFound;

        }else{
        showChampions(filteredChampions);
        }
      });
    
    


    //FUNCION FILTRAR POR ROL
    document.getElementById("allRoles").addEventListener("change", (e)=>{
        const roleSelected = e.target.value;
        //console.log(typeof roleSelected);

        if(roleSelected == 'All'){
            return showChampions(newData); //devuelve un objeto
        }else{
            let filterRoles = (filterChampions(newData, roleSelected));
            // console.log(newData.tags); undefined
           // console.log(filterChampions);
            showChampions(filterRoles);
            
            document.getElementById("order").addEventListener("change", (e) => {
                let target = e.target.value;
                let orderedChamps = (orderChampions(filterRoles,"name", target));
                //console.log(orderedChamps)
                showChampions(orderedChamps);
            });
        }
      });
        
    //FUNCION SORT AZ-ZA
    document.getElementById("order").addEventListener("change", (e) => {
        
        let target = e.target.value;
        let orderedChamps = (orderChampions(newData, "name", target));
        //console.log(orderedChamps)
        showChampions(orderedChamps);
    });   
 
});
    

//VISTA 3 
document.getElementById("statistics").addEventListener("click", function() {
    document.getElementById("secondNavigator").style.display= "none";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page3-Statistics");
    document.getElementById("body").classList.remove("page2-Champions");
    document.getElementById("body").classList.remove("page4-InfoAbout");
    document.getElementById("storage").style.display= "none";
    document.getElementById("aboutLol").style.display="none";
    document.getElementById("minMax").style.display="block";
    document.querySelector(".aboutLol").style.display = "none";

   //const dataAllChampions = Object.values(data);
   


    //console.log(newData);
  //FUNCIONA
  
   let hp = [];
   let armor = [];
   let attackdamage = [];

   newData.forEach(item=>{
    hp.push(item.stats.hp);
    armor.push(item.stats.armor);
    attackdamage.push(item.stats.attackdamage);
    // attackrange.push(item.stats.attackrange);

   });
   let hpResult= computeStats(hp);
   let armorResult= computeStats(armor);
   let attackdamageResult= computeStats(attackdamage);

   //console.log(hpResult);
   //console.log(armorResult);

   
  //Objetos
  let hpMin;
  let hpMax;
  let armorMin;
  let armorMax;
  let attackMin;
  let attackMax;
  newData.forEach((propChamp) => {
  

/*   switch(propChamp.stats.hp){
    case hpResult[0]:
        create (propChamp.stats.hp, "hp", propChamp);
        console.log("entré");
      break;

      case hpResult[1]:
        create (propChamp.stats.hp, "hp", propChamp);
        console.log("ingresé");
      break;  
     default:
       console.log("no funcionó");
      
  } */

   if(propChamp.stats.hp == hpResult[0]) {
     hpMin = { 
      name : propChamp.name,
      img: propChamp.img,
      value: propChamp.stats.hp
      }
   }
   else if(propChamp.stats.hp == hpResult[1]) {
     hpMax = { 
      name : propChamp.name,
      img: propChamp.img,
      value: propChamp.stats.hp
      }
  }
   else if(propChamp.stats.armor == armorResult[0]) {
    armorMin = { 
     name : propChamp.name,
     img: propChamp.img,
     value: propChamp.stats.armor
     }
  }
  else if(propChamp.stats.armor == armorResult[1]) {
    armorMax = { 
     name : propChamp.name,
     img: propChamp.img,
     value: propChamp.stats.armor
     }
  }
  else if(propChamp.stats.attackdamage == attackdamageResult[0]) {
    attackMin = { 
     name : propChamp.name,
     img: propChamp.img,
     value: propChamp.stats.attackdamage
     }
  }
  else if(propChamp.stats.attackdamage == attackdamageResult[1]) {
    attackMax = { 
     name : propChamp.name,
     img: propChamp.img,
     value: propChamp.stats.attackdamage
     }
  }

  // else if  (propChamp.stats.armor == armorResult[0] || propChamp.stats.armor == armorResult[1]) {
  //   return create (propChamp.stats.armor, "armor" , propChamp)}
  
  // else if  (propChamp.stats.attackdamage == attackdamageResult[0] || propChamp.stats.attackdamage == attackdamageResult[1]) {
  //     return create (propChamp.stats.attackdamage, "attackdamage" , propChamp)}
  
});
   //console.log(table.join(""));
    let newTable =  
   `<table class="table">
    <tr> 
    <caption> ATTACKDAMAGE </caption>
    </tr>

    <tr>
      <th>MINIMO</th>
      <th>MAXIMO</th>
    </tr>

    <tr>
      <td>${attackMin.name}</td>
      <td>${attackMax.name}</td>
    </tr>
    
    <tr>
      <td><img src=${attackMin.img}></img></td> 
      <td><img src=${attackMax.img}></img></td> 
    </tr>

    <tr>
      <td>${attackMin.value}</td>
      <td>${attackMax.value}</td>
    </tr>

   </table>
   <br>
   <table class="table">
    <tr> 
    <caption> ARMOR </caption>
    </tr>

    <tr>
      <th>MINIMO</th>
      <th>MAXIMO</th>
    </tr>

    <tr>
      <td>${armorMin.name}</td>
      <td>${armorMax.name}</td>
    </tr>
    
    <tr>
      <td><img src=${armorMin.img}></img></td> 
      <td><img src=${armorMax.img}></img></td> 
    </tr>

    <tr>
      <td>${armorMin.value}</td>
      <td>${armorMax.value}</td>
    </tr>

   </table>
   <br>
   <table class="table">
    <tr> 
    <caption> HP </caption>
    </tr>

    <tr>
      <th>MINIMO</th>
      <th>MAXIMO</th>
    </tr>

    <tr>
      <td>${hpMin.name}</td>
      <td>${hpMax.name}</td>
    </tr>
    
    <tr>
      <td><img src=${hpMin.img}></img></td> 
      <td><img src=${hpMax.img}></img></td> 
    </tr>

    <tr>
      <td>${hpMin.value}</td>
      <td>${hpMax.value}</td>
    </tr>

   </table>`



   document.getElementById("minMax").innerHTML = newTable;
});



    
   //console.log(hp)

    // let pintar = computeStats(hp){
    
    //   return pintar};
      /* `<table id="sect"> 
    
          <tr>${item.name}</tr>
          <tr><img src="${item.img}"></img></tr> 
    
      
          <td>${item.stats.hp}</td>
        
         
  </table>` */
  
    // }) ;
   /*  console.log(computeStats(hp));
    document.getElementById("aboutLol").innerHTML = table;

    let minMax = (computeStats(hp));
    //console.log(minMax); */







    // let arr = [10, 4, 20, 39, 5];
    // computeStats(arr)
   //const dataAllChampions = Object.values(data);
  
   //computeStats(newData);
   //console.log(statsData);
  
  
  
  //   let hpArray = newData.map((prueba)=>{
    //console.log(prueba);
    // let objetoData ={ //PARA CONSTRUIR TABLA CON STRING TEMPLATES - CODIGO BETSY
    //   name : prueba.name,
    //   img: prueba.img,
      
    // };

//     // let valuesStats = Object.values(prueba.stats);
//     // let hpValues = valuesStats[0];
//     // objetoData.hp = hpValues;
//     // //console.log(objetoData);
//     // return objetoData;
//     // for(let hpChampion in hpValues){
//     //   let hpChamp = hpValues[hpChampion];
//     //   console.log(hpChamp);
//     // }}
   
// //     //array con stats e.g armor de todos en un array y comparar

// let hpArray = newData.map((prueba)=>{
//    let properties = Object.values(prueba.stats); 
//     console.log(properties); //[stat1, stat2, stat3] [stat1, stat2, stat3] [stat1, stat2, stat3] 134 veces
//     //console.log(properties);
//     let prop;
//     let property = [];
//     for(let i=0; i< properties.length; i++){
//        prop = properties[0];
//        property.push(prop);
//       //console.log(prop);
//       // key = prueba.stats[property];
//       //console.log(key);
//     //  let hpArray=
//     //  hpArray.push(prueba.stats.hp)
//     //console.log((key));
//     }
//     console.log(property.push(prop));
//   });
  //  });
//    //console.log(newData);
//   // function prueba (newData) {
//   //    console.log(Object.values(newData.stats));
//   //   //  let stats = [newData.stats.hp];//es un number uno x linea
//   //   //  let hpArray =[];
//   //   //  //hpArray.concat(stats);
//   //   //  console.log(hpArray.concat(stats));
     
     
//   //  }
//   //  prueba(newData);
//   let htmlString = champions.map((propChamp)  => {
//     console.log(propChamp);
      
//       let tags = Object.values(propChamp.tags);
//       let infoKeys = Object.keys(propChamp.info);
//       let infoValues = Object.values(propChamp.info);

  
// });
// })});
// });

//console.log(hpArray);

//VISTA 4
document.getElementById("about").addEventListener("click", function() {
  document.getElementById("secondNavigator").style.display= "none";
  document.getElementById("leagueOfLegends").style.display= "none";
  document.getElementById("body").classList.add("page4-InfoAbout");
  document.getElementById("body").classList.remove("page3-Statistics");
  document.getElementById("body").classList.remove("page2-Champions");
  document.getElementById("storage").style.display= "none";
  document.querySelector(".aboutLol").style.display= "block";
  document.getElementById("minMax").style.display="none";
});

//RELOAD
document.getElementById("lolIcon").addEventListener("click",
function(){
    location.reload();
});


