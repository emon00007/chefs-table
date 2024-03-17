import { useState } from 'react'
import './App.css'
import Banner from './assets/Component/Banner/Banner'
import Databars from './assets/Component/Banner/Databars/Databars'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Navbar from './assets/Component/Navbar/Navbar'
import Recipes from './assets/Component/Recipes/Recipes'
import SideBar from './assets/Component/SideBar/SideBar'
import Cooking from './assets/Component/Cookingfood/Cooking';


function App() {
  const notify = () => toast("This foot cooking");
  const [addtocat, setAddtocat] = useState([]);
  const handelarAddCut = cookItem => {
    const isExists = addtocat.find(item => item.recipe_id == cookItem.recipe_id)
    if (!isExists) {
      setAddtocat([...addtocat, cookItem])
    } else {
      notify()
    }
  }
  const [cooking, setCooking] = useState([])
  const [time ,setTime ]= useState(0)
  const [calories ,setCalories ]= useState(0)
  const handelarPreparing = (item) => {
    const remaining = addtocat.filter(i => i.recipe_id !== item.recipe_id)
    setAddtocat(remaining)
    setCooking([...cooking, item])
     

    const preparingTime = parseInt(item.preparing_time)
       setTime(time+preparingTime)

    const preparingCalories = parseInt(item.calories)
       setCalories(time+preparingCalories)
  }
  // console.log(cooking)
  return (
    <>

      <Navbar></Navbar>

      <Banner></Banner>
      <ToastContainer></ToastContainer>

      <Recipes></Recipes>

      <div className='grid m-5  grid-cols-1 md:grid-cols-5 gap-4'>
        <div className='col-span-3'><Databars handelarAddCut={handelarAddCut}></Databars></div>
        <div className='col-span-2 border border-black'><SideBar handelarPreparing={handelarPreparing}  addtocat={addtocat}></SideBar>
        <h1 className="text-3xl text-center my-4 ">preapering to cook:{cooking.length} </h1>
        <Cooking time={time} calories={calories} cooking={cooking}></Cooking></div>
         
      </div>

    </>
  )
}

export default App
