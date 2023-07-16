import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display: 'flex', alignItem: 'space-between'}}>
      <span className='logo'>Flipkart</span>
      <div>
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/cart'>Cart</Link>
        <span className='cartCount'>Cart item: 0</span>
      </div>
    </div>
  );
}

export default Navbar;
