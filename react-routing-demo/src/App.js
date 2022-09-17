import './App.css';

import {Routes,Route} from "react-router-dom"
import Home from './Component/Home'
import Navbar from './Component/Navbar';
import AllProducts from './Component/AllProducts'
import ProductDetails from './Component/ProductDeatails'
import NotFound from './Component/NotFound'
import PrivateRoute from './Component/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Navbar/>
<Routes>

<Route  path='/' element={<Home/>} ></Route>
<Route  path='/products' element={
  <PrivateRoute>
  
  <AllProducts/>
  </PrivateRoute>

} ></Route>

<Route  path='/products/:id' element={
  
  <PrivateRoute>

  <ProductDetails/>
  </PrivateRoute>
} ></Route>
<Route  path='*'   element={<NotFound/>} >  </Route>

</Routes>

     </div>
  );
}

export default App;
