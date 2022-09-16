import "./ViewCategory.css";
import React, { useEffect, useState, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import { GetListOfCategory } from "../../../services/Categories";
import { DeleteCategoryService } from "../../../services/Categories";
import { UpdateCategoriesService } from "../../../services/Categories";

const ViewListOfCategory = () => {
 
  const navigate = useNavigate();
  const [categorieslist, setcategoryarray] = useState([]);
  const [_id, setId] = useState("");
  const[filename,setfilename]=useState("");
  // const[Updatedfilename,setUpdatedfilename]=useState("");
  //  let updatedfile=useRef("");
  // let  id=useRef('');
  // let  _id=useRef('');

  let category_name=useRef("");
  let editCategoryName = useRef("");
 
  
  
  const ListOfCategories=()=>
  {
    GetListOfCategory().then((items) => {
      setcategoryarray(items);
    })
  }

useEffect(() => {
    if(!localStorage.getItem('admintoken'))
    {
      navigate('/adminlogin')
     }
   ListOfCategories();
   
  }, []);
  const onchangefile = (e) => {
    
    setfilename(e.target.files[0]);
    console.log(filename);
  };
function selectCategory(Category) {
    // id=Category._id
    // let e;
    console.log("In select category consolee");
    setId(Category._id);
    category_name=Category.editCategoryName;
    editCategoryName.current.value = Category.category_name;
    onchangefile();
    // filename=Category.target.files[0];
    // console.log(filename);
    // console.log(Category.target.files[0]);
    // Updatedfilename.target.files[0]=Category.filename;
  }
  const updateCategory = () => {

    const updatedCategoryName = editCategoryName.current.value;
    // const updatedfileis= Updatedfilename.target.files[0]
    console.log("updaed", updatedCategoryName);
    let item = { category_name: updatedCategoryName,_id };
    // CategoryImage: updatedfileis 
   UpdateCategoriesService(item)
   ListOfCategories();
 };

  const deleteCategory = (_id) => {
    DeleteCategoryService(_id);
    ListOfCategories();

};

  return (
    <div>
        <h3>
        <b>View All Categories Here</b>
        </h3>
     
 
      <br></br>
      <table border="1" className="center">
        <tbody className="styling">
          <tr>
            <td>
              <b className="special1">Category ID</b>
            </td>
            <td>
              <b className="special1">Category List</b>
            </td>
            <td>
              <b className="special1">Admin Name</b>
            </td>
            <td>
              <b className="special1">Category Images</b>
            </td>
            <td>
              <b className="special1">Operation</b>
            </td>
            <td>
              <b className="special1">Operation</b>
            </td>
          </tr>
          {Array.isArray(categorieslist
    ) ? (
            categorieslist.map((item, i) => (
              <tr key={i}>
                <td>{item._id}</td>
                <td>{item.category_name}</td>
                <td>{item.AdminId.name}</td>
                <td><img src={`${process.env.REACT_APP_LOCAL_HOST_PATH}${item.CategoryImage}`} width="140" height="95" alt=".."  /></td>
                <td>
                  <button className="unique1"   onClick={() => deleteCategory(item._id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button className="unique" enctype="multipart/form-data" onClick={() => selectCategory(item)}>Edit</button>
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
        <form  enctype="multipart/form-data">
          <b>Category:</b>
          <div class="txt_field">
            <input
              ref={editCategoryName}
              type="text"
            />
            <div>
            <br></br>
        <label htmlFor="file">Choose a file</label>
        <input id="mouse"
        type="file"
        filename="CategoryImage"
        // className="form-control-file"
        onChange={onchangefile}
      
      />
        </div>

            <span></span>
            <br></br>
          </div>
        </form>
        <br></br>
        <button  className="fun" onClick={updateCategory}>
          Click to Update
        </button>
      </div>
    </div>
  );
};
export default ViewListOfCategory;
