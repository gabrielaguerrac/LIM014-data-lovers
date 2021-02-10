//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

import { example } from './data.js';
 import data from './data/lol/lol.js';

document.getElementById("principalNav").style.display= "block";
document.getElementById("secundaryNav").style.display= "none";
const showDataChamps = document.querySelector(" .calling");

document.getElementById("champions").addEventListener("click", function() {
    document.getElementById("secundaryNav").style.display= "block";
    // document.getElementById("principalNav").style.display= "block";
   const dataAllChampions = Object.values(data);
   
});
console.log(data);
