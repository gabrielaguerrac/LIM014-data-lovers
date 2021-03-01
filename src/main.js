import data from './data/lol/lol.js';
import {orderChampions, filterChampions, computeStats } from './data.js';


//VISTA INICIO
document.getElementById("firstNavigator").style.display= "block";
document.getElementById("secondNavigator").style.display= "none";
document.getElementById("storage").style.display="none";
document.getElementById("modalContainer").style.display = "none";
document.querySelector(".aboutLol").style.display = "none";
document.getElementById("minMax").style.display="none";

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
        } )
       // console.log(htmlString);
        storage.innerHTML = htmlString;  
      }

      showChampions(newData);


    //FUNCION BUSCAR POR NOMBRE
    searchBar.addEventListener("keyup", (e) =>{
        const searchValue = e.target.value.toLowerCase();
        
        let filteredChampions = newData.filter(propChamp => {
          
          //console.log(propChamp);
         return propChamp.name.toLowerCase().includes(searchValue);
        })
        showChampions(filteredChampions);
        //console.log(filteredChampions);
      });
    

    //FUNCION FILTRAR POR ROL
    document.getElementById("allRoles").addEventListener("change", (e)=>{
        const roleSelected = e.target.value;

        if(roleSelected == 'All'){
            return showChampions(newData); //devuelve un objeto
        }else{
            let filterRoles = (filterChampions(newData, roleSelected));
            //console.log(typeof filterRoles);
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
        console.log(orderedChamps)
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
    document.getElementById("minMax").style.display="block";
   //const dataAllChampions = Object.values(data);
   


    //console.log(newData);
  //FUNCIONA
  
   let hp = [];
   let armor = [];
   newData.forEach(item=>{
    hp.push(item.stats.hp);
    armor.push(item.stats.armor);

   });
   let hpResult= computeStats(hp);
   let armorResult= computeStats(armor);

   //console.log(hpResult);
   //console.log(armorResult);




   let table = newData.map((propChamp) => {

      //console.log(item.stats.hp)
   // console.log(item.name)
   // hp.push(propChamp.stats.hp);
   // let hpResult= computeStats(newData, "hp");
    // console.log(hp);

   function create (stat, title){
    return `<table class="sect"> 
    <th> ${title} </th>
    <tr>${propChamp.name}</tr>
    <tr><img src="${propChamp.img}"></img></tr> 
    <td>${stat}</td>
   </table>`
   }

 /*   switch(propChamp.stats.hp){
     case hpResult[0] : create(propChamp.stats.hp , "hp");
     break;
     default: console.log("wiwi");
   }; */

   
   if(propChamp.stats.hp == hpResult[0] || propChamp.stats.hp == hpResult[1]) {
   /* return `<table class="sect"> 
    <th>HP: </th>
    <tr>${propChamp.name}</tr>
    <tr><img src="${propChamp.img}"></img></tr> 
    <td>${propChamp.stats.hp}</td>
   </table>` */

  return create (propChamp.stats.hp, "hp")
   }

  //  else if  (propChamp.stats.armor == armorResult[0] || propChamp.stats.armor == armorResult[1]) {
  //   return `

  //   <table class="sect"> 
  //   <tr>${propChamp.name}</tr>
  //   <tr><img src="${propChamp.img}"></img></tr> 
  //   <th> ARMOR: </th>
  //   <td> armor: ${propChamp.stats.armor}</td>
  //   </table>
  //   `
  
  //  return hp.push(propChamp.stats.hp)
   });
   //console.log(hp);
   document.getElementById("minMax").innerHTML = table;
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




