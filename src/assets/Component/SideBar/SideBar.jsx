import PropTypes from 'prop-types';
const SideBar = ({addtocat}) => {
    
    //    console.log(recipe_name)
    console.log(addtocat)
    return (
        <div className="1/3 text-center">

       
            <div className="overflow-x-auto">
            <h1 className="text-3xl my-4">Want to cook:{addtocat.length} </h1>
                <table className="table">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* <!-- row 2 --> */}
                        <tr className="hover">
                            <th>*</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <button className="bg-[#0BE58A]">Preparing</button>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};
// SideBar.propTypes = {
//     addtocat: PropTypes.
// }

export default SideBar;