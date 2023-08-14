import React from 'react';
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {

  const items = useSelector((state) =>state.cart);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span className='logo'>FlipKart</span>
      <div style={{ marginLeft: '20px' }}>
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/cart' style={{ marginLeft: '10px' }}>Cart</Link>
        <span className='cartCount'>Cart item: {items.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
