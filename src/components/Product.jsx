import React, { useState } from 'react';
import { Globalcontext } from './Globalcontext';
import { useContext } from 'react';
import axios from 'axios';

const Product = (p) => {
  const [quantity , setQuantity] = useState(1);
  const {globalState , setGlobalState} = useContext(Globalcontext);
  function hoverfun(){
    document.getElementById(p.pid).style.display='block';
  }
  function outfun(){
    document.getElementById(p.pid).style.display='none';
  }
  function buyclick(){
    setQuantity(quantity+1);
    axios.put(`https://copper-puppy-garb.cyclic.app/api/cart/${globalState.userId}`,{
        products:{
            productId:p.pid,
            quantity:quantity
        }
    },{headers:{
        token: 'bearer '+globalState.accessToken
    }}).then(res=>console.log(res)).catch(err=>console.log(err));
  }
  console.log(setGlobalState);
  return (
    <div id='productd' onMouseOver={hoverfun} onMouseLeave={outfun}>
        <div id='product'>
        <img id='pimg' src={p.img} alt='' />
        <div id='ptitle'>{p.title}</div>
        <div id='pcost'>
            <span id='pscost'>${p.cost} </span><span id='psdcost'> ${p.dcost}</span>
        </div>
        </div>
        <div id={p.pid} className='buy' onClick={buyclick}>Buy</div>
    </div>
  )
}

export default Product