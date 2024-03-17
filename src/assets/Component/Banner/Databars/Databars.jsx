import { useEffect, useState } from "react";
import Databar from "../../Databar/Databar";
import PropTypes from 'prop-types';

const Databars = ({handelarAddCut}) => {


    const [databars,setDatabars]= useState([]);
    useEffect(()=>{
        fetch('jason.json')
        .then(res=> res.json())
        .then(data=>setDatabars(data))
    },[])
    return (
      
            <div className="body">
              <div className='grid grid-cols-1 md:grid-cols-2   gap-5'>
              {
                databars.map(cookItem=><Databar 
                    key={cookItem.recipe_id} cookItem={cookItem}
                    handelarAddCut={handelarAddCut}></Databar>)
                    
              }
              </div>
        </div>
      
    );
};

Databars.propTypes = {
    handelarAddCut: PropTypes.func
}

export default Databars;

