export const AddRegion= async (region,capital)=>

 {
    
     try {
     
     
     const response= await fetch(`${process.env.REACT_APP_LOCAL_HOST_PATH}region`,{
        // await
         method:'post',
         body:JSON.stringify({region,capital}),
         headers:{
             'Content-Type':'application/json',
             Authorization: `bearer ${JSON.parse(localStorage.getItem('admintoken'))}`
         }
         

     })
     console.log("Successfully fetched api of admin region");
     if (!response.ok) {
     
         throw new Error(`Error! status:`);
       }
      
    
    const result=await response.json();
    return result; 
 }
 catch (err) {
     console.log(err);
   }
   
 }
// export default AddRegion;
export const GetRegionList = async () => {
  console.log("heloooo CATEGORY");
  let result = await fetch(
    `${process.env.REACT_APP_LOCAL_HOST_PATH}region`,
    {
      headers: {
        Authorization: `bearer ${JSON.parse(
          localStorage.getItem("admintoken")
        )}`,
      },

    }
  )
  
  result = await result.json();
  console.log(result);
  return result.regiondata;
};

export const DeleteRegionService = (_id) => {
 
  fetch(`${process.env.REACT_APP_LOCAL_HOST_PATH}region/${_id}`, 
  { method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `bearer ${JSON.parse(localStorage.getItem('admintoken'))}` 
  },
 }).then(
    (result) => {
      result.json().then((response) => {
        console.warn("Deleted!!" + response);
       
      });
    }
  );
};

export const UpdateRegionService = (item) => {
  
 
  fetch(`${process.env.REACT_APP_LOCAL_HOST_PATH}region/${item._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${JSON.parse(localStorage.getItem('admintoken'))}` 
    },
    body: JSON.stringify(item),
  }).then((result) => {
    result.json().then((resp) => {
      console.warn(resp);
      
    });
  });
};
