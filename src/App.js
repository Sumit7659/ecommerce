import './App.css';
import{BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/> 
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Products" element={<Product/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;