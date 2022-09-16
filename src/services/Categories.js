export const AddCategories = async (category_name,filename) => {
    const formData = new FormData();
    formData.append("category_name", category_name);
    // formData.append("refid",refid);
    formData.append("CategoryImage", filename, filename.name);
    // `${process.env.REACT_APP_LOCAL_HOST_PATH}category` 
    try {
      // console.log(`Id is ${refid}`);
      const response= await fetch( `${process.env.REACT_APP_LOCAL_HOST_PATH}category`,{
        
           method:'post',
           body:formData,
           headers:{
             
               Authorization: `bearer ${JSON.parse(localStorage.getItem('admintoken'))}` 
               
           }
  
       })
       console.log("Successfully fetched api of offers category");
       const result=await response.json();
       
   
       if (!response.ok) {
      
           throw new Error(`Error! status:`);
         }
       
      
     
      return result; 
   }
   catch (err) {
       console.log(err);
       console.log("catch statement");
     }
  };
  
  export const GetListOfCategory = async () => {
    console.log("heloooo CATEGORY");
    let result = await fetch(
      `${process.env.REACT_APP_LOCAL_HOST_PATH}category`,
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
    return result.categorydata;
  };

 export const DeleteCategoryService = (_id) => {
   
    fetch(`${process.env.REACT_APP_LOCAL_HOST_PATH}category/${_id}`,
     { 
    method: "DELETE" ,
    headers: {
      Accept: "application/json",
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
  
  export const UpdateCategoriesService = (item) => {
   
    
    fetch(`${process.env.REACT_APP_LOCAL_HOST_PATH}category/${item._id}`, {
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
  
 