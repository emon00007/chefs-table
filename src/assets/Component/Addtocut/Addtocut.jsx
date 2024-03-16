const Addtocut = ({addtocat,index}) => {
    
    const {recipe_name,preparing_time,calories}=addtocat
    console.log(recipe_name)
    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table">
   
    <tbody>
      <tr class="hover">
        <th>{index+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button className="btn bg-[#0BE58A] rounded-3xl text-black">Preparing</button></td>
      </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Addtocut;