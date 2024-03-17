const Addtocut = ({ addtocat, index, handelarPreparing }) => {

  const { recipe_name, preparing_time, calories } = addtocat
  // console.log(addtocat)


  return (

    <div>
      <div className="overflow-x-auto">
        <table className="table">

          <tbody>
            <tr className="hover">
              <th>{index + 1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              <td><button onClick={() => handelarPreparing(addtocat)} className="btn bg-[#0BE58A] rounded-3xl text-black">Preparing</button></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addtocut;