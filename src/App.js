import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Pet from './pages/Pet';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Main/>}></Route>
        <Route path='/Pet' element={ <Pet/>}></Route>
        <Route path='/Product' element={ <Product/>}></Route>
        <Route path='/ProductDetail' element={ <ProductDetail/>}></Route>
      </Routes>
    </Router> 
  )
}

export default App;
