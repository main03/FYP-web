import { useRef, useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import {AddProduct} from "../../../services/Products";
import { GetListOfCategory } from "../../../services/Categories";

const AddedProduct = () => {
  const name = useRef(null);
  const price = useRef(null);
  const brand_name = useRef(null);
  const product_quantity=useRef(null);
  const CategoryId = useRef(null);
 
 
  const[filename,setfilename]=useState("");
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
 
  const handlesubmit = (e) => {
    e.preventDefault()
    alert("Form Filled Successfully");
   
    navigate('/viewlistofproduct');
};

useEffect(() => {
  if(!localStorage.getItem('admintoken'))
  {
    navigate('/adminlogin')
   }
  GetListOfCategory().then((items) => {
    setdata(items);
  });
}, []);
  const onchangefile = (e) => {
    
    setfilename(e.target.files[0]);
  };

  return (
  
    <div className="Register">
  
      <h1 className="sherry">Add a Product</h1>
      <form onSubmit={handlesubmit} enctype="multipart/form-data" >  
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter the name of product:"
            ref={name}
          />
        </div>
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter the price of product:"
            ref={price}
          />
        </div>
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter the brand name of product:"
            ref={brand_name}
          />
        </div>
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter the quantity of product:"
            ref={product_quantity}
          />
        </div>
        <div>
       
       {/* <label for="category_name">Choose a car:</label> */}
       <select ref={CategoryId} >  
     { data.map((item) => (
       <option value={item._id}>{item.category_name}</option>      
     ))}
     </select>

        
     </div>
       
    <div className="form-group">
      <label htmlFor="file">Choose a file</label>
      <input
        type="file"
        filename="ProductImage"
        className="form-control-file"
        onChange={onchangefile}
      />
        
    </div>
     

        <button
          className="submitbutton"
          onClick={() => {
            AddProduct(
              name.current.value,
              price.current.value,
              brand_name.current.value,
              product_quantity.current.value,
              CategoryId.current.value,filename
            );
          }}
         
        >
           Add
        </button>
      
      </form>
    </div>
  );
};
export default AddedProduct;

