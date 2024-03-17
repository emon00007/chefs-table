import PropTypes from 'prop-types';
import Addtocut from '../Addtocut/Addtocut';




const SideBar = ({ addtocat,handelarPreparing}) => {

    return (
        <div className="body">

            <div className="overflow-x-auto">
                <h1 className="text-3xl text-center my-4 ">Want to cook:{addtocat.length} </h1>
                <thead>
                    <tr className='flex gap-16'>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                {
                    addtocat.map((addtocat,index)=>
                    <Addtocut handelarPreparing={handelarPreparing} key={index}
                    addtocat={addtocat} index={index} ></Addtocut>
                    )
                }

    
            </div>
           
            
        
            
        </div>
        

    );
};


SideBar.propTypes = {
    addtocat: PropTypes.object
}
SideBar.propTypes = {
    handelarPreparing: PropTypes.func
}





export default SideBar;