// // estas funciones son de ejemplo




export const filterChampions = (data) => {
  const filterRoles= data.filter(element => {
    let propChamp =  element[1];
    console.log(propChamp);
   // console.log(propChamp.tags[0]);
   //console.log(propChamp.tags[1]);
   let dos = propChamp.tags;
   return dos.includes(filterRoles);
          
  })}
  



export const computeStats = (data) => {

  return Object.entries(data) ;

}


export const orderChampions = (data, sortBy, sortOrder) => {
  if ( /*sortBy == "name" &&*/ sortOrder == "aZ"){
    
    return data.sort((a,b)=>{
      console.log(a.sortBy);
      console.log(b.sortBy);
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