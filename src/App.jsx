import './App.css'
import Banner from './assets/Component/Banner/Banner'
import DataBar from './assets/Component/Data bar/DataBar'

import Navbar from './assets/Component/Navbar/Navbar'
import Recipes from './assets/Component/Recipes/Recipes'
import SideBar from './assets/Component/SideBar/SideBar'


function App() {
  

  return (
    <>
      
      <Navbar></Navbar>

     <Banner></Banner>

     
      <Recipes></Recipes>
     
     <div className='flex mx-7'>
      <DataBar></DataBar>
      <SideBar></SideBar>
     </div>
     
    </>
  )
}

export default App
