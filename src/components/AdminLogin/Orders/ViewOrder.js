import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewOrder.css";
import { GetListOfOrder } from "../../../services/Orders";
import { AcceptedStatusThroughDropDown } from "../../../services/Orders";
import { RejectedStatusofOrder } from "../../../services/Orders";
// update howa h ya naeee

const ViewOrder = () => {
  const [order, setorder] = useState([]);
  // const [OrderTotal, setordertotal] = useState("");
  const [OrderStatus, setorderstatus] = useState("");
  const [_id, setId] = useState("");
  const navigate = useNavigate();
  const status = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("admintoken")) {
      navigate("/adminlogin");
    }
   
    GetListOfOrder().then((items) => {
      setorder(items);
    })
   
  }, []);

  

  const AcceptedStatus = (_id, status) => {
    let item = {_id,status };
    AcceptedStatusThroughDropDown(item);
    GetListOfOrder().then((items) => {
      setorder(items);
    })

  };
  const RejectedStatus = (_id) => {
   
   
      RejectedStatusofOrder(_id)
      GetListOfOrder().then((items) => {
        setorder(items);
      })
  };

  return (
    <div>
      <h2 className="target">
        <b>View Order List Here</b>
      </h2>
      <br></br>
      <br></br>
      <table border="1" className="center">
        <tbody className="styling">
          <tr>
            <td>
              <b className="special">Ordered Product Price</b>
            </td>
            <td>
              <b className="special">Order Status</b>
            </td>

            <td>
              <b className="special">Retailor FirstName</b>
            </td>
            <td>
              <b className="special">Retailor LastName</b>
            </td>
            <td>
              <b className="speciall">All Product Information</b>
            </td>
            <td>
              <b className="special">Operation</b>
            </td>
            <td>
              <b className="special">Operation</b>
            </td>
          </tr>

          {Array.isArray(order) ? (
            order.map((item, i) => (
              <tr key={i}>
            
                <td>{item.OrderTotal}</td>
                <td>{item.OrderStatus}</td>
                <td>{item.UserId.FirstName}</td>
                <td>{item.UserId.LastName}</td>

                {item.ProductId.map((detail, key) => (
                  <tr key={key}>
                    <td>
                      {" "}
                      <b className="yellow"> Name:</b> {detail.productname}
                    </td>
                    <td>
                      <b className="yellow"> Price:</b>
                      {detail.productprice}
                    </td>
                    <td>
                      <b className="yellow"> Brand:</b>
                      {detail.productbrand}
                    </td>
                    <td>
                      <b className="yellow"> Quantity:</b>
                      {detail.quantity}
                    </td>

                   
                    <td>
                      <b className="yellow">Product-Image:</b>
                      <img
                        src={`${process.env.REACT_APP_LOCAL_HOST_PATH}${detail.ProductImage}`}
                        width="100"
                        height="60"
                        alt="Purani Fields"
                      />
                    </td>
                  </tr>
                ))}
                <td>
                  {/* <label for="status">Accepted Status:</label> */}
                  <select ref={status}>
                    <option value="Processing">Processingg</option>
                    <option value="To be Delievered">To be Delievered</option>
                    <option value="Confirmed">Confirmed</option>
                  </select>
                  {/* <br></br> */}
                  <button
                    className="unique1"
                    onClick={() =>
                      AcceptedStatus(item._id, status.current.value)
                    }
                  >
                    Click to Accept
                  </button>
                </td>
                <td>
                  <button
                    className="unique1"
                    onClick={() => RejectedStatus(item._id)}
                  >
                    Rejected
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

      <div class="center"></div>
    </div>
  );
};
export default ViewOrder;
