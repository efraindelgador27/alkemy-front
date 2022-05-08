import style from './index.module.css';
import { useState } from 'react';
function Input(props){
    const [initialValue,setInitialValue]=useState(props.config.value?props.config.value:undefined);
    return(
        <div className={`${style.inputBox} ${props.err?style.err:""}`}>
            <label >{props.config.title}</label>
            <input className={style.input} type={props.config.type} name={props.config.name} onChange={(e)=>{if(props.CB){props.CB(e)};setInitialValue(e.target.value)}} value={initialValue}/>
        </div>
    )
}

export default Input;