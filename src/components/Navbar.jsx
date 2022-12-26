import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='nav'>
        <Link id='nc1' to='/register'>Register</Link>
        <Link id='nc2' to='/login'>sign in</Link>
    </div>
  )
}

export default Navbar