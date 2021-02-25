import data from './data/lol/lol.js';
import {orderChampions, filterChampions } from './data.js';


//VISTA INICIO
document.getElementById("firstNavigator").style.display= "block";
document.getElementById("secondNavigator").style.display= "none";
document.getElementById("storage").style.display="none";
document.getElementById("modalContainer").style.display = "none";
document.querySelector(".aboutLol").style.display = "none";

const storage = document.getElementById("storage");
const searchBar = document.getElementById("searchBar");
const entries = Object.entries(data.data);
const newData = Object.values(data.data);


//VISTA CHAMPIONS
document.getElementById("champions").addEventListener("click", function() {
    document.getElementById("secondNavigator").style.display= "block";
    document.getElementById("leagueOfLegends").style.display= "none";
    document.getElementById("body").classList.add("page2-Champions");
    document.getElementById("body").classList.remove("page3-Statistics");
    document.getElementById("body").classList.remove("page4-InfoAbout");
    document.getElementById("storage").style.display="block";
    
    const showChampions = (champions) => {
        let htmlString = champions.map((propChamp)  => {
          console.log(propChamp);
            
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
        
        let filteredChampions = newData.filter(element => {
          //console.log(propChamp);
         return element.name.toLowerCase().includes(searchValue);
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
                console.log(orderedChamps)
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
   //const dataAllChampions = Object.values(data);

   function (){
        console.log(newData.element)
   }
   
});


//VISTA 4
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


//RELOAD
document.getElementById("lolIcon").addEventListener("click",
function(){
    location.reload();
}
)




    

    



  