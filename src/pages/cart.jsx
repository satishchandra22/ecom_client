import React, { useContext, useEffect, useState } from 'react'
import Cartproducts from '../components/Cartproducts';
import Navbar2 from '../components/Navbar2';
import { Globalcontext } from '../components/Globalcontext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {globalState, setGlobalState} = useContext(Globalcontext);
  const [cartList, setCartList] = useState([{productId:'',quantity:""}]);
  useEffect(()=>{
     axios.get(`https://copper-puppy-garb.cyclic.app/api/cart/find/${globalState.userId}`,
     {headers:{
      token: 'bearer'+' '+globalState.accessToken
  }}
     ).then(
      (res)=>{setCartList(res.data.products);
        console.log(res)
      }
     )
  },[])
  return (
    <div>
      <Navbar2  name={globalState.username}/>
      <Link to='/shop'>Go back to Shop</Link>
      <h3> My cart</h3>
      {cartList.map(
        (item)=>{
          return(
            <>
            <Cartproducts pId = {item.productId} key={item.productId}/>
            </>
          )
        }
      )}
    <div className='f1'></div>
    </div>
  )
}

export default Cart;