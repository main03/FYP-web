export const GetListOfOrder = async () => {
  
  let result = await fetch(
   `${process.env.REACT_APP_LOCAL_HOST_PATH}order`
    
   , {
      headers: {
        Authorization: `bearer ${JSON.parse(
          localStorage.getItem("admintoken")
        )}`,
      },

    }
  )
  
  result = await result.json();
  console.log(result);
  return result.Orderdata;
};
export const AcceptedStatusThroughDropDown = (item) => {
  
  fetch(
    `${process.env.REACT_APP_LOCAL_HOST_PATH}order/${item._id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${JSON.parse(
          localStorage.getItem("admintoken")
        )}`,
      },
      body: JSON.stringify({ OrderStatus: item.status }),
    }
  ).then((result) => {
    result.json().then((resp) => {
      console.warn(resp);
    
    
    });
  });
};
export const RejectedStatusofOrder = (_id) => {
   
  
  fetch(
    `${process.env.REACT_APP_LOCAL_HOST_PATH}order/${_id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${JSON.parse(
          localStorage.getItem("admintoken")
        )}`,
      },
      body: JSON.stringify({ OrderStatus: "Rejected.." }),
    }
  ).then((result) => {
    result.json().then((resp) => {
      console.warn(resp);
     
    });
  });
};