// // estas funciones son de ejemplo




export const filterChampions = (data, condition) => {

  
  //console.log(roleSelected);

const filterRoles= data.filter(element => {
  let propChamp =  element[1];
  //console.log(propChamp);//si hay {version,...}
  let rolesChampion= propChamp.tags;
  //console.log(dos); //los tags 1 o 2 de todos los champions
  //return console.log('soy el return cuando seleccionas mago');

  let filteredByTags = rolesChampion.includes(condition);
 // console.log(filteredByTags);
  return filteredByTags;
   //console.log(dos); //los tags 1 o 2 de todos los champions
  //return console.log('soy el return cuando seleccionas mago');
  //  let conCondition = (algo == 'true') ?  console.log('true') : console.log('false');
  // return console.log(conCondition);//devuelve undefined

});
return filterRoles;

}
  


export const computeStats = (data) => {
  
  const result = data.sort((a,b)=>{
   // return {b-a};
  })
  return Object.entries(data) ;

}


export const orderChampions = (data, sortOrder) => {
  //console.log(data)
  if ( sortOrder == "aZ"){
    
    const result = data.sort((a,b)=>{
        // console.log(a.name);
        // console.log(b.name);
      if (b > a){
        return -1;
    }
      if (b < a){
        return 1;
    }

    return 0;

    });
    //console.log(result);
    return result;
    
  } else {

    const result = data.sort((a,b)=>{
      // console.log(a.name);
      // console.log(b.name);
    if (b > a){
      return 1;
  }
    if (b < a){
      return -1;
  }

  return 0;

  });
   //console.log(result);
  return result;
  }
  
}

// export const filterRoles = (data, condition) => {

//   Object.entries(data.data).filter(element => {
//   let propChamp =  element[1];
//   console.log(propChamp);
//  return propChamp.tags[0].includes(condition);
// });
// //showChampions(filter);
// }