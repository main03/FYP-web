import React from "react";
import { useRef } from "react";
import LoginforAdmin  from '../../services/Login'
// import {useNavigate} from 'react-router-dom';
import "./AdminLogin.css";

const Login = () => {
  
    const name=useRef(null);
    const password=useRef(null);
    // const navigate = useNavigate();

 
  const handlesubmit = (e) => {
    if(name.current.value==="Sheharyar" && password.current.value==="admin"){
    alert("Admin Login SuccessFully at frontend");
    window.location.href = '/addedcategories'
    // navigate("/addcategories")
   
    }
    else{
      alert("Add correct credentials");
    }

    e.preventDefault();
  };

  return (
    <div className="master">
      <h3>Admin Login Here</h3>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Name Please :"
          ref={name}
          name="name"
         
        
        />
        {/* {emailerror ? <span className="text-danger">{emailerror}</span> : null} */}
        <input
          type="password"
          className="inputBox"
          placeholder="Enter password Please:"
          ref={password}
        />
        <button
          className="appButton"
        //   disabled={buttonStatus}
          onClick={() =>
            LoginforAdmin(name.current.value,password.current.value)
          }
        >
          Submit
        </button>
        
      </form>
    </div>
  );
};
export default Login;
