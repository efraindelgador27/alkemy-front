
function Choise(props){

    const Options=props.options.map((option)=> <option value={option}>{option}</option> )
    return(
        <div class="mb-3">
         <label className="form-label">{props.title}</label>
        <select className="form-control" id="cars" name={props.name} onChange={(e)=>{
          props.cb(e.target.value);
          console.log(e.target.value)
          }}>
        {Options}
      </select>
      </div>
      
    )
  }

  export default Choise;

  
 