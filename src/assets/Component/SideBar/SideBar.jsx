import PropTypes from 'prop-types';
import Addtocut from '../Addtocut/Addtocut';

const SideBar = ({ addtocat }) => {

    return (
        <div className="1/3 text-center">

            <div className="overflow-x-auto">
                <h1 className="text-3xl my-4 ">Want to cook:{addtocat.length} </h1>
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
                    <Addtocut key={addtocat.id}
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





export default SideBar;