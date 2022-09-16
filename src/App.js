

import './App.css';
import Nav from './Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import SignUp from './components/RetailerSignup/SignUp';
import Login from './components/Admin/Login'
import AddedRegion from './components/Admin/Regions/AddRegion';
import AddedCategories from './components/Admin/Categories/AddCategories';
import AddedProduct from './components/Admin/Products/AddProduct';
import ViewAllRegions from './components/Admin/Regions/ViewRegion';
import ViewListOfCategory from './components/Admin/Categories/ViewCategory';
import ViewListOfProduct from './components/Admin/Products/ViewProduct';
import ViewOrder from './components/Admin/Orders/ViewOrder';
import AddUpcomingOffers from './components/Admin/UpcomingOffers/AddUpcomingOffers';

function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<h1><i>B2B APP WELCOMES YOU !! </i></h1>}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/adminlogin" element={<Login />}/>
      <Route path="/addregion" element={<AddedRegion />}/>
      <Route path="/addedcategories" element={<AddedCategories/>}/>
      <Route path="/addedproduct" element={<AddedProduct />}/>
      <Route path="/viewallregions" element={< ViewAllRegions />}/>
      <Route path="/viewlistofcategory" element={<ViewListOfCategory />}/>
      <Route path="/viewlistofproduct" element={<ViewListOfProduct />}/>
      <Route path="/viewOrder" element={<ViewOrder />}/>
      <Route path="/upcomingoffers" element={<AddUpcomingOffers />}/>
     
     
     
    </Routes>
    
     </BrowserRouter>
    
     <Footer />
    </div>
  );
}

export default App;
