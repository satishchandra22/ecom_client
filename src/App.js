import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import { Globalcontext } from './components/Globalcontext';
function App() {
  const [globalState , setGlobalState] = useState({username:'',userId:'',accessToken:''})
  
  return (
    <div className="App">
      <Globalcontext.Provider value={{globalState , setGlobalState}}>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/shop' element={<Shop/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      </Globalcontext.Provider>
    </div>
  );
}

export default App;
