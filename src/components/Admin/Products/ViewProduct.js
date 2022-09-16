
import { useState, useEffect,useRef } from "react";
import "./ViewProduct.css";
import {useNavigate} from 'react-router-dom';
import { GetListOfProduct } from "../../../services/Products";
import { DeleteProductService } from "../../../services/Products";
import { UpdateProductService } from "../../../services/Products";

const ViewListOfProduct = () => {
  const [product, setproduct] = useState([]);
  const [_id, setId] = useState("");

  let name=useRef("");
  let editProductName = useRef("");
  let price=useRef("");
  let editPrice = useRef("");
  let brand_name=useRef("");
  let editBrandName=useRef("");
  let  product_quantity=useRef("");
  let editQuantity=useRef("");
  
  
 
  
  const navigate = useNavigate();
  const ListOfProduct=()=>
  {
    GetListOfProduct().then((items) => {
      setproduct(items);
    })
  }
  useEffect(() => { 
    if(!localStorage.getItem('admintoken')) 
    {
     
      navigate('/adminlogin')
      
    
    }
   ListOfProduct();
   
    
   
  }, []);
 
  const deleteProduct = (_id) => {
    DeleteProductService(_id);
    ListOfProduct();
   
  };
  function selectProduct(products) {
   
   
    name=products.editProductName;
    price=products.editPrice;
    brand_name=products.editBrandName;
    product_quantity=products.editQuantity;
    
    editProductName.current.value=products.name;
    editPrice.current.value=products.price
    editBrandName.current.value=products.brand_name
    editQuantity.current.value=products.product_quantity;
    setId(products._id);
    
  }
 
  const updateProduct = () => {
    const updatedProductName = editProductName.current.value;
    const updatedPrice=editPrice.current.value;
    const updatedBrandname=editBrandName.current.value;
    const updatedquantity=editQuantity.current.value
    let item = { name:updatedProductName, price:updatedPrice, brand_name:updatedBrandname,
      product_quantity:updatedquantity, _id };
 
     UpdateProductService(item)
     ListOfProduct();
   
   
  };
  return (
    <div>
      <h3>
        <b>View Added Product Here</b>
      </h3>
    <br></br>
      <table border="1" className="center">
        <tbody className="styling">
          <tr>
           
            <td>
              <b className="special1">Name</b>
            </td>
            <td>
              <b className="special1">Price</b>
            </td>
            <td>
              <b className="special1">Brand Name</b>
            </td>
            <td>
              <b className="special1">Product Quantity</b>
            </td>
            <td>
              <b className="special1">Admin Name</b>
            </td>
           
            <td>
              <b className="special1">Category Name</b>
            </td>
            <td>
              <b className="special1">Product Image</b>
            </td>
            <td>
              <b className="special1">Category Image</b>
            </td>
            <td>
              <b className="special1">Operation</b>
            </td>
            <td>
              <b className="special1">Operation</b>
            </td>
          </tr>
          {Array.isArray(product) ? (
            product.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.brand_name}</td>
                <td>{item.product_quantity}</td>
                <td>{item.AdminId.name}</td>
                <td>{item.CategoryId.category_name}</td>
                <td><img src={`${process.env.REACT_APP_LOCAL_HOST_PATH}${item.ProductImage}`} width="130"  height="80" alt="Purani Fields"  /></td>
                <td><img src={`${process.env.REACT_APP_LOCAL_HOST_PATH}${item.CategoryId.CategoryImage}`} width="140"  height="80" alt="Purani Fields"  /></td>
              

                <td>
                  <button  className="unique1" onClick={() => deleteProduct(item._id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button className="unique"  onClick={() => selectProduct(item)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>

      <br></br>

      <div class="center">
        <form>
          <div class="txt_field">
            <b>Name:</b>
            <input
              type="text"
              ref={editProductName}
             
            />
            <b>Price:</b>
            <input
              type="text"
              ref={editPrice}
            />
            <b>Brand-Name</b>
            <input
              type="text"
              ref={editBrandName}
            />
              <b>Product-Quantity</b>
            <input
              type="text"
               ref={editQuantity}
            />

            <span></span>
            <br></br>
          </div>
        </form>
        <br></br>
        <button className="fun" type="submit" onClick={updateProduct}>
          Click to Update
        </button>
      </div>
    </div>
  );
};
export default ViewListOfProduct;
