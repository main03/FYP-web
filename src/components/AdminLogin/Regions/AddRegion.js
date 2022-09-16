import  { useEffect, useRef,useState} from "react";
import {useNavigate} from 'react-router-dom';
// import "./SignUp.css";
// import ConnectBackend from "./ConnectBackend";
import { AddRegion } from "../../../services/Regions";

const AddedRegion = () => {
  const navigate = useNavigate();

 
  useEffect(()=>
  {
    if(!localStorage.getItem('admintoken'))
    {
      navigate('/adminlogin')
    }
   
  },[])


  const region = useRef(null);
  const capital=useRef(null);
  
  // const refid='6300af4997dcffe28b32da99';
  

  
const handlesubmit=(e)=>
{
    alert("Data Sent Successfully");
    e.preventDefault()
    navigate('/showregion');
}
  

  return (
    <div className="Register">
      <h1 className="sherry">Admin-Region</h1>
      <form onSubmit={handlesubmit} >
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter region :"
            ref={region}
            
          />
        
        </div>
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter capital :"
            ref={capital}
           
          />
          
          
      
       
        </div>
       
       

        <button
          className="submitbutton"
          
          // disabled={(name.current.value === '' || email.current.value==='' || password.current.value==='')}
          onClick={() => {
          
             AddRegion(region.current.value,capital.current.value);
            }}
          
        >Add</button>

      </form>
    </div>
  );
};
export default AddedRegion;


