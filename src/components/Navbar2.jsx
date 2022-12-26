import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Globalcontext } from './Globalcontext';


const Navbar2 = (p) => {
  const {globalState , setGlobalState} = useContext(Globalcontext);
  function logoutfun(){
    setGlobalState({});
  }
  return (
    <div id='nav2'>
        <div id='n2c1'>{p.name}</div>
        <Link id='n2c2' to='/cart'>Cart</Link>
        <Link id='n2c3' to='/' onClick={logoutfun}>Logout</Link>
    </div>
  )
}

export default Navbar2