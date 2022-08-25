import { useRef, useState, useEffect } from "react";
import ConnectProduct from "./ConnectProduct";

const AdminProduct = () => {
  const name = useRef(null);
  const price = useRef(null);
  const brand_name = useRef(null);
  // const CategoryId = useRef(null);
  const Admin_refid = "6300af4997dcffe28b32da99";
  const CategoryId="63070c882060ad58ef078e94";
  const [data, setdata] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault()
    alert("Form Filled Successfully");
  };

  useEffect(() => {
    async function fetchdata() {
      let url = "http://localhost:5000/product";
      var res = await fetch(url);
      var resp = await res.json();
      setdata(resp.productdata);
      console.warn("Data fetched from get product is", resp.productdata);
    }

    fetchdata();
  }, []);

  return (
    <div className="Register">
      <h1 className="sherry">Add a Product</h1>
      <form onSubmit={handlesubmit}>
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
       
       {/* <label for="category_name">Choose a car:</label> */}
       <select >  
     {data.map((item) => (
       <option value={item._id}>{item.category_name}</option>      
     ))}
     </select>
         
     </div>
     

        <button
          className="submitbutton"
          onClick={() => {
            ConnectProduct(
              name.current.value,
              price.current.value,
              brand_name.current.value,
              Admin_refid,
              CategoryId
            );
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AdminProduct;

{
  /* <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */
}
