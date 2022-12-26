import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Cartproducts = (p) => {
  const [product , setProduct] = useState({img:''});
  useEffect(()=>{
    axios.get(`https://copper-puppy-garb.cyclic.app/api/product/find/${p.pId}`).then(
        (res)=>{setProduct(res.data)}
    ).catch(err=>console.log(err))
  },[])

  return (
    <div id='cartp'>
        <img src={product.img}  />
        <span>{product.title}</span>
        <span>--------</span>
        <span>${product.cost}</span>
    </div>
  )
}

export default Cartproducts;