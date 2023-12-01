import DeleteSellers from './Components/Seller/DeleteSeller';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditSeller from "./Components/Seller/EditSeller";
import AddSeller from "./Components/Seller/AddSeller";
import ViewSellers from "./Components/Seller/ViewSellers";
function Routing() {
  return (
    <div className="App">
        
      <BrowserRouter>
      
      
        <Routes>
         <Route path="/" />
          <Route path ="/seller" element={<ViewSellers/>}/>
          <Route path ="/seller/:id" element={<DeleteSellers/>}/>
          <Route path ="/seller/:id/edit" element={<EditSeller/>}/>
          <Route path ="/seller/add" element={<AddSeller/>}/>
        </Routes>
        </BrowserRouter>
        <br/>
        <br/>
    </div>
  );
}

export default Routing;
