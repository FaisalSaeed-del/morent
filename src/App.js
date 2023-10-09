import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import AddSection from './components/AddSection'
import PickandDrop from './components/PickandDrop'
import ResponsivePickandDrop from './components/common/ResponsivePickandDrop'
import PopularCar from './components/PopularCar'
import RecomendedCars from './components/Recomended'
import Footer from './components/Footer'

const App = () => {
  return (
   <div>
    <Navbar/>
    <AddSection/>
    <div className='hidden md:block'>
    <PickandDrop/>
    </div>
    <div className='block md:hidden'>
      <ResponsivePickandDrop/>
    </div>
    <PopularCar/>
    <RecomendedCars/>
    <Footer/>
   </div>
  )
}

export default App