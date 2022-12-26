import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Globalcontext } from '../components/Globalcontext';
import ItemNav from '../components/ItemNav';
import Navbar2 from '../components/Navbar2';
import Product from '../components/Product';
const url = 'https://copper-puppy-garb.cyclic.app/api/product';
const Shop = () => {
  const [productlist , setProductlist] = useState([]);
  const {globalState , setGlobalState} = useContext(Globalcontext);
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setProductlist(res.data);
    },[])
  })

  return (
    <div>
      <Navbar2 name={globalState.username}/>
      <ItemNav/>
      <div id='shop_pic'></div>
      <div id='product_container'>
      {productlist.map((item)=>{
        return (
          <>
            <Product img={item.img} title={item.title} cost={item.cost} dcost={item.dcost} key={item._id} pid={item._id}/>
          </>
        )
      })}
      </div>
      <div className='f1'></div>
    </div>
    
  )
}

export default Shop;