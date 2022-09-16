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
 
function selectCategory(Category) {
    
    console.log("In select category consolee");
    setId(Category._id);
    category_name=Category.editCategoryName;
    editCategoryName.current.value = Category.category_name;
 
  }
  const updateCategory = () => {

    const updatedCategoryName = editCategoryName.current.value;
    console.log("updaed", updatedCategoryName);
    let item = { category_name: updatedCategoryName,_id };
  
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
