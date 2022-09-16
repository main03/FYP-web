import  { useRef,useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';
// import AddCategories from "../../../services/CategoriesFetch";
import { AddCategories } from "../../../services/Categories";



const AddedCategories = () => {

  const category_name= useRef(null);
  const[filename,setfilename]=useState("");
  
 

  const navigate = useNavigate();
  useEffect(()=>
  {
    if(!localStorage.getItem('admintoken'))
    {
      navigate('/adminlogin')
    }
  

  },[])
  
  const onchangefile = (e) => {
    
    setfilename(e.target.files[0]);
  };
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    alert("Form Filled Successfully");
    navigate('/viewlistofcategory');
    
  }
 

  return (
    <div className="Register">
      <h1 className="sherry">Add a Category</h1>
      <form onSubmit={handlesubmit} type="Submit">
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter the name of category:"
            ref={category_name}
            
          />
        
        </div>
    
    <div className="form-group">
      <label htmlFor="file">Choose a file</label>
      <input
        type="file"
        filename="CategoryImage"
        className="form-control-file"
        onChange={onchangefile}
      />
      
      
    </div>
    
        

        <button
          className="submitbutton" onClick={() => {AddCategories(category_name.current.value,filename);
            }}
          
        >Add</button>

      </form>
    </div>
  );
};
export default AddedCategories ;



