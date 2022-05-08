
import style from './choise.module.css'

function Choise(props){

    const Options=props.options.map((option,index)=> <option key={index} value={option}>{option}</option> )
    return(
      <div  className={style.container}>
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

  
 