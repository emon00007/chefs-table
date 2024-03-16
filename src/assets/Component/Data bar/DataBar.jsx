import { useEffect, useState } from "react";

const DataBar = () => {
  
  const [dataBar,setDataBar]= useState([]);
    useEffect(()=>{
        fetch('jason.json')
        .then(res=> res.json())
        .then(data=>console.log(data))
    },[])

    return (
        <div className="w-2/3">
            <h2>slaide bar</h2>
        </div>
    );
};

export default DataBar;