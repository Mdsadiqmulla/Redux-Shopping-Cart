import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
       <h2 className='heading'>welcome to the Shopping Cart</h2> 
       <section>
        <h3>Products</h3>
        <Products/>
       </section>
    </div>
  )
}

export default Home