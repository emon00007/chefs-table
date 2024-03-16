import { useState } from 'react'
import './App.css'
import Banner from './assets/Component/Banner/Banner'
import Databars from './assets/Component/Banner/Databars/Databars'



import Navbar from './assets/Component/Navbar/Navbar'
import Recipes from './assets/Component/Recipes/Recipes'
import SideBar from './assets/Component/SideBar/SideBar'


function App() {
  const [addtocat,setAddtocat]=useState([]);
  const handelarAddCut = cookItem =>{
    const newAddtocat = [...addtocat,cookItem]
    setAddtocat(newAddtocat)
  }

  

  return (
    <>
      
      <Navbar></Navbar>

     <Banner></Banner>
     
     
      <Recipes></Recipes>
     
     <div className='flex mx-7 gap-2'>
     <Databars handelarAddCut={handelarAddCut}></Databars>
      <SideBar addtocat={addtocat}></SideBar>
     </div>
     
    </>
  )
}

export default App
