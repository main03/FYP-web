

import './App.css';
import Nav from './Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import SignUp from './components/RetailerSignup/SignUp';
import Login from './components/RetailerLogin/Login';
import AdminLoginn from './components/AdminLogin/AdminLogin';
import AddedRegion from './components/AdminLogin/Regions/AddRegion';
import AddedCategories from './components/AdminLogin/Categories/AddCategories';
import AddedProduct from './components/AdminLogin/Products/AddProduct';
import ShowRegion from './components/AdminLogin/Regions/ShowRegion';
import ViewListOfCategory from './components/AdminLogin/Categories/ViewCategory';
import ViewListOfProduct from './components/AdminLogin/Products/ViewProduct';
import ViewOrder from './components/AdminLogin/Orders/ViewOrder';
import AddUpcomingOffers from './components/AdminLogin/UpcomingOffers/AddUpcomingOffers';

function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<h1><i>B2B APP WELCOMES YOU !! </i></h1>}/>
      <Route path="" element={<h1><i>404 NOT FOUNDD </i></h1>}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/adminlogin" element={<AdminLoginn />}/>
      <Route path="/addregion" element={<AddedRegion />}/>
      <Route path="/addedcategories" element={<AddedCategories/>}/>
      <Route path="/addedproduct" element={<AddedProduct />}/>
      <Route path="/showregion" element={<ShowRegion />}/>
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
