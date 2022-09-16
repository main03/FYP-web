import  { useRef,useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';
import { FetchUpcomingOffers } from "../../../services/UpcomingOffers";
import { fetchproducts } from "../../../services/UpcomingOffers";


const AddUpcomingOffers = () => {

  const description=useRef(null);
  const  Expiry_Date= useRef(null);
  const  BuyQuantity= useRef(null);
  const  GetQuantity= useRef(null);
  const[filename,setfilename]=useState("");
  const BuyItem= useRef(null);
  const GetItem = useRef(null);
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      if(!localStorage.getItem('admintoken'))
      {
        
        navigate('/adminlogin')
      }
      
      fetchproducts().then((items) => {
        setdata(items);
      });
     
    
      
    }

    fetchdata();
  }, []);


  const onchangefile = (e) => {
    
    setfilename(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  };

  return (
    <div className="Register">
      <h2 className="sherry">Add a Offer</h2>
      <form onSubmit={handleSubmit}   enctype="multipart/form-data">
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter Description:"
            ref={description}
            
          />
        
      </div>
    
        <div className="form-group">
          <label htmlFor="file"><b>Choose a file:</b></label>
          <input
            type="file"
            filename="OfferImage"
            className="form-control-file"
            onChange={onchangefile}
          />
          
        </div>
        <div>
      
        <div>
       <label for="Expiry_Date"><b>Add Offer Expiry Date:</b></label>
  
       <input type="date"  ref={Expiry_Date} />
       </div>
        </div>
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter Buy Quantity:"
            ref={BuyQuantity}
            
          />
        
      </div>
      <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter Get Quantity"
            ref={GetQuantity}
            
          />
        
      </div>
     
       <div>
      <b>BuyItem:</b>
       <select ref={BuyItem} >  
       {data.map((item) => (
       <option value={item._id}>{item.name}</option>      
     ))}
     </select>
     </div>

     <div>
     <b>GetItem:</b>
       <select ref={GetItem} >  
     {data.map((item) => (
       <option value={item._id}>{item.name}</option>      
     ))}
     </select>
     </div>
    
        
     

        <button
          className="submitbutton"
          onClick={() => {
          FetchUpcomingOffers(description.current.value,filename,Expiry_Date.current.value,
          BuyQuantity.current.value,GetQuantity.current.value,BuyItem.current.value,GetItem.current.value);
            }}
          
        >Add</button>

      </form>
    </div>
  );
};
export default AddUpcomingOffers;



