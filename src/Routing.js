import DeleteSellers from './Components/Seller/DeleteSeller';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ViewSellers from "./Components/Seller/ViewSellers";
function Routing() {
  return (
    <div className="App">
        
      <BrowserRouter>
      
      
        <Routes>
         <Route path="/" />
          <Route path ="/seller" element={<ViewSellers/>}/>
          <Route path ="/seller/:id" element={<DeleteSellers/>}/>
        </Routes>
        </BrowserRouter>
        <br/>
        <br/>
    </div>
  );
}

export default Routing;
