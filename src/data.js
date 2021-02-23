// // estas funciones son de ejemplo



export const filterChampions = (data, condition) => {

  return Object.entries(data) ;

}

export const computeStats = (data) => {

  return Object.entries(data) ;

}


export const orderChampions = (data, sortBy, sortOrder) => {
  if ( /*sortBy == "name" &&*/ sortOrder == "aZ"){
    
    return sortBy.sort((a,b)=>{
      console.log(a.name);
      console.log(b.name);
      if (a.name>b.name){
        

        return 1;
    }
    if (a.name<b.name){
        return -1;
    }

    return 0;

    })
  }
  if ( /* sortBy == "name" && */ sortOrder == "zA"){
    return sortBy.sort((a,b)=>{
      if (a.name>b.name){
        return -1;
    }
    if (a.name<b.name){
        return 1;
    }

    return 0;

    });


}}

export const filterRoles = (data, condition) => {

  Object.entries(data.data).filter(element => {
  let propChamp =  element[1];
  console.log(propChamp);
 return propChamp.tags[0].includes(condition);
});
//showChampions(filter);
}