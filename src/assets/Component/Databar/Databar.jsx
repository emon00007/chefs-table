import PropTypes from 'prop-types';

const Databar = ({ cookItem,handelarAddCut }) => {
    const { recipe_name,recipe_image,short_description,ingredients,calories,preparing_time } = cookItem
    
    return (
        <div >
            <div className="card pt-5 card-compact bg-base-100 shadow-xl">
                <figure><img className='h-96 w-96 rounded-xl ' src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <br />
                    <h4>Ingredients:{ ingredients.length}</h4>
                    <ul >
                    
                    {
                    ingredients.map((ingred,ind )=><li key={ind}>-{ingred}</li>)
                    }
                    </ul>

                    <div className='flex gap-5'>
                        <h5>{preparing_time}</h5>
                        <h5>{calories}</h5>
                    </div>

                    <div className="card-actions ">
                        <button onClick={()=>handelarAddCut(cookItem)} className='bg-[#0BE58A] rounded-2xl p-2 '>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Databar.propTypes = {
    cookItem: PropTypes.object.isRequired,
    handelarAddCut: PropTypes.func
    
}


export default Databar;