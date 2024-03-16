import { useState } from 'react'
import './App.css'
import Banner from './assets/Component/Banner/Banner'
import Databars from './assets/Component/Banner/Databars/Databars'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Navbar from './assets/Component/Navbar/Navbar'
import Recipes from './assets/Component/Recipes/Recipes'
import SideBar from './assets/Component/SideBar/SideBar'


function App() {
  const notify = () => toast("This foot cooking");
  const [addtocat,setAddtocat]=useState([]);
  const handelarAddCut = cookItem =>{
    // const newAddtocat = [...addtocat,cookItem]
    const isExists=addtocat.find(item=>item.recipe_id==cookItem.recipe_id)
    // setAddtocat(newAddtocat)
    if(!isExists){
      setAddtocat([...addtocat,cookItem])
    }else{
      notify()
    }
  }

  

  return (
    <>
      
      <Navbar></Navbar>

     <Banner></Banner>
     <ToastContainer></ToastContainer>
     
      <Recipes></Recipes>
     
     <div className='flex mx-7 gap-2'>
     <Databars handelarAddCut={handelarAddCut}></Databars>
      <SideBar addtocat={addtocat}></SideBar>
     </div>
     
    </>
  )
}

export default App
