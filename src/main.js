//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


import data from './data/lol/lol.js';

document.getElementById("principalNav").style.display= "block";
document.getElementById("secundaryNav").style.display= "none";
//const showDataChamps = document.querySelector(" .calling");

document.getElementById("champions").addEventListener("click", function() {
    document.getElementById("secundaryNav").style.display= "block";
    // document.getElementById("principalNav").style.display= "block";
   //const dataAllChampions = Object.values(data);
   
});
//console.log(data);


//1. LLAMAR MEDIANTE SEARCH 
document.getElementById("glass").addEventListener("click", function() {
    
    let champSearch = document.getElementById("search").value;
    let result1 
    
    = data.champSearch;

    console.log(result)
});
