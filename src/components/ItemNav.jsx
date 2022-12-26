import React from 'react'

const ItemNav = () => {
  function hovefun (){
     document.getElementById('inwindow').style.display = 'block';
  }
  function outfun (){
    document.getElementById('inwindow').style.display = 'none';
  }
  return (
    <div id='itemnav' >
       <div id='logo'></div>
       <div id='in1' onMouseOver={hovefun} >
            <div>HOME</div>
            <div>STORE</div>
            <div>IPHONE</div>
            <div>IPAD</div>
            <div>MACBOOK</div>
            <div>ACCESORIES</div>
       </div>
       <div id='inwindow' >
        <table id='table' onMouseLeave={outfun}>
            <tr>
                <td className='th'>Accessories</td>
                <td></td>
                <td className='th'>Category</td>
                <td></td>
                <td className='th'>Category</td>
            </tr>
            <tr>
                <td>AirPort & Wireless</td>
                <td>Cameras & Video</td>
                <td>Charging Devices</td>
                <td>Headphones</td>
                <td>Mi9ce & Keyboards</td>
            </tr>
            <tr>
                <td>AppleCare</td>
                <td>Car & Travel</td>
                <td>Connected Home</td>
                <td>HealthKit</td>
                <td>Music Creation</td>
            </tr>
            <tr>
                <td>Bags, Shells & Sleeves</td>
                <td>Cases& Films</td>
                <td>Device Care</td>
                <td></td>
                <td>Networking & Server</td>
            </tr>
            <tr>
                <td>Business & Security</td>
                <td></td>
                <td>Display & Graphic</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Cables & Docks</td>
                <td></td>
                <td>Fitness & Sport</td>
                <td></td>
                <td></td>
            </tr>
        </table>
       </div>
    </div>
  )
}

export default ItemNav