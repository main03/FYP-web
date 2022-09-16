import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import{useParams} from 'react-router-dom';
import { GetRegionList } from "../../../services/Regions";
import { DeleteRegionService } from "../../../services/Regions";
import { UpdateRegionService } from "../../../services/Regions";
import "./ShowRegion.css";
const ShowRegion = () => {
  // const [editedCateogry, setEditedCategory] = useState({_id: null, category_name: null})
  const [regions, setregionstate] = useState([]);
  const [_id, setId] = useState("");
  let region = useRef("");
  let capital = useRef("");
  const RegionName = useRef("");
  const capitalName = useRef("");

  const navigate = useNavigate();

  const ListOfRegions = () => {
    GetRegionList().then((items) => {
      setregionstate(items);
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("admintoken")) {
      navigate("/adminlogin");
    }
    ListOfRegions();
  }, []);

  function selectRegion(Region) {
    region = Region.RegionName;
    capital = Region.capitalName;
    setId(Region._id);

    RegionName.current.value = Region.region;
    capitalName.current.value = Region.capital;
  }

  const deleteRegion = (_id) => {
    DeleteRegionService(_id);
    ListOfRegions();
  };
  const updateRegion = () => {
    const updatedRegionName = RegionName.current.value;
    const updatedCapitalName = capitalName.current.value;

    let item = { region: updatedRegionName, capital: updatedCapitalName, _id };
    UpdateRegionService(item);
    ListOfRegions();
  };

  return (
    <div>
      <h1>
        <b>View Region Here</b>
      </h1>
      <br></br>
      <br></br>
      <table border="1" className="center">
        <tbody className="styling">
          <tr>
            <td>
              <b className="special">RegionID</b>
            </td>
            <td>
              <b className="special">Region</b>
            </td>
            <td>
              <b className="special">Capital</b>
            </td>
            <td>
              <b className="special">AdminName</b>
            </td>
            <td>
              <b className="special">Operation</b>
            </td>
            <td>
              <b className="special">Operation</b>
            </td>
          </tr>
          {Array.isArray(regions) ? (
            regions.map((item, i) => (
              <tr key={i}>
                <td>{item._id}</td>
                <td>{item.region}</td>
                <td>{item.capital}</td>
                <td>{item.AdminId.name}</td>
                <td>
                  <button
                    className="unique1"
                    onClick={() => deleteRegion(item._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="unique1"
                    onClick={() => selectRegion(item)}
                  >
                    Update
                  </button>
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
          <b>Region:</b>
          <div class="txt_field">
            <input type="text" ref={RegionName} />
            <span></span>
          </div>
          <br></br>
          <b>Capital:</b>
          <div class="txt_field">
            <input type="text" ref={capitalName} />
            <span></span>
            <br></br>
          </div>
        </form>
        <br></br>
        <button className="fun" onClick={updateRegion}>
          Click to Update
        </button>
      </div>
    </div>
  );
};
export default ShowRegion;
