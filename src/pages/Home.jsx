import React from 'react'
import ItemNav from '../components/ItemNav'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <ItemNav/>
      <div id='home_pic1'></div>
      <div className='f1'></div>
    </div>
  )
}

export default Home