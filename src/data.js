// // estas funciones son de ejemplo



export const filterChampions = (data, condition) => {

  data.filter(data => data.includes(condition));
  
};

export const computeStats = (data) => {
  
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

export const filterRoles = (data, condition) => {

  Object.entries(data.data).filter(element => {
  let propChamp =  element[1];
  console.log(propChamp);
 return propChamp.tags[0].includes(condition);
});
//showChampions(filter);
}