export const filterChampions = (data, condition) => data.filter(propChamp => propChamp.tags.includes(condition));


export const orderChampions = (data, sortBy, sortOrder) => {
  console.log(data)
  if ( sortOrder == "aZ"){
    
    const result = data.sort((a,b)=>{
         //console.log(a[sortBy]);
         //console.log(b[sortBy]);
      if (b[sortBy] > a[sortBy]){
        return -1;
    }
      if (b[sortBy] < a[sortBy]){
        return 1;
    }

    return 0;

    });
    //console.log(result);
    return result;
    
  } else {

    const result = data.sort((a,b)=>{
      
    if (b[sortBy] > a[sortBy]){
      return 1;
  }
    if (b[sortBy] < a[sortBy]){
      return -1;
  }

  return 0;

  });
   //console.log(result);
  return result;
  }
  
}

export const computeStats = (data) => {
  
  const result = data.sort((a,b)=>{
   // return {b-a};
  })
  return Object.entries(data) ;

}

