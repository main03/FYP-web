const ConnectProduct= async (name,price,brand_name,Admin_refid,CategoryId)=>

 {
    
     try {
    
      console.log(`Data going in backend as ${CategoryId}`);
     const response= await fetch("http://localhost:5000/product",{
        // await
         method:'post',
         body:JSON.stringify({name,price,brand_name,Admin_refid,CategoryId}),
         headers:{
             'Content-Type':'application/json'
         }

     })
     console.log("Successfully fetched api of admin category");
     if (!response.ok) {
      // ${response.status}
         throw new Error(`Error! status:`);
       }
       //json kay bator body text pass krny pr mil jaye ga
    
    const result=await response.json();
    return result; 
 }
 catch (err) {
    //  console.log(err);
   }
   
 }
export default ConnectProduct;