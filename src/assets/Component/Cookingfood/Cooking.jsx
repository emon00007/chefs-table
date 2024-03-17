import PropTypes from 'prop-types';
const Cooking = ({cooking,time,calories}) => {
    console.log(cooking)
    return (
        <div>
            <div className="overflow-x-auto body">
                
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className='bg-slate-300'>
                        {cooking.map((cook, idx) => (
                            <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{cook.recipe_name} minutes</td>
                                <td>{cook.preparing_time} calories</td>
                                <td>{cook.calories}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 px-2 bg-slate-50 mx-auto border-b border-slate-300 max-w-md rounded-3xl flex justify-between py-6 ">
                <h2> <span className='font-bold '>TotalTime=</span> {time} minutes</h2>
                <h2> <span className='font-bold '>Total Calories=</span> {calories} Calories</h2>
            </div>
        </div>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.object}
Cooking.propTypes = {
    calories: PropTypes.object}
Cooking.propTypes = {
    time: PropTypes.object}

export default Cooking;