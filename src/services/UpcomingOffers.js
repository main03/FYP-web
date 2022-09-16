export const FetchUpcomingOffers = async (
  description,
  filename,
  Expiry_Date,
  BuyQuantity,
  GetQuantity,
  BuyItem,
  GetItem
) => {
  const formData = new FormData();
  formData.append("description", description);
  formData.append("OfferImage", filename, filename.name);
  formData.append("Expiry_Date", Expiry_Date);
  formData.append("BuyQuantity", BuyQuantity);
  formData.append("GetQuantity", GetQuantity);
  formData.append("BuyItem", BuyItem);
  formData.append("GetItem", GetItem);

  try {
    // console.log(`Data going in backend as ${region}`);
    const response = await fetch(
      "http://localhost:5000/upcomingoffers",
      {
        // await
        method: "post",
        // body:JSON.stringify({description,file}),
        body: formData,
        headers: {
          Authorization: `bearer ${JSON.parse(
            localStorage.getItem("admintoken")
          )}`,
        },
      }
    );
    console.log("Successfully fetched api of offers category");
    //   alert("Offer's Add Successfully");
    if (!response.ok) {
      // ${response.status}
      throw new Error(`Error! status:`);
    }
    //json kay bator body text pass krny pr mil jaye ga

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    console.log("catch statement");
  }
};


export const fetchproducts = async () => {
  //   const [data, setdata] = useState([]);
  try {
   var res=await fetch("http://localhost:5000/product"
  ,{
    headers: {
      Authorization: `bearer ${JSON.parse(localStorage.getItem('admintoken'))}` 
    }
})
    
     
    var resp = await res.json();
    return resp.productdata;
  } catch (e) {
    console.log("error error error", e);
  }
};

