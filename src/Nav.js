import React from 'react-dom';
import { Link } from 'react-router-dom';
const Nav=()=>
{
    return(
        <div>
          
            <ul className="header-ul">
               
              
                {
                    localStorage.getItem('admintoken')?
                    <>
                <li><Link to="/addregion"><button>Regions</button></Link></li>
                <li><Link to="/addedcategories"><button>Categories</button></Link></li>
                <li><Link to="/addedproduct"><button>Add Product</button></Link></li>
                <li><Link to="/showregion"><button>View Region</button></Link></li>
                <li><Link to="/viewlistofcategory"><button>View Categories</button></Link></li>
                <li><Link to="/viewlistofproduct"><button>View Product</button></Link></li>
                <li><Link to="/vieworder"><button>View Order</button></Link></li>
                <li><Link to="/upcomingoffers"><button>Add Upcoming Offers</button></Link></li>
                    </>
                    :
                    <>
                    {/* <li><Link to="/signup"><button>SignUp</button></Link></li> */}
                    {/* <li><Link to="/">Product</Link></li> */}
                {/* <li><Link to="/login"><button>Login</button></Link></li> */}
                <li><Link to="/adminlogin"><button>AdminLogin</button></Link></li>
                    </>

                }
               
              
               
            </ul>
        </div>

    );
}

export default Nav; 