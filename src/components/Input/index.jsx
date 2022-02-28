import React,{Component} from 'react';

function Input(props){
    return(
        <div class="mb-3">
            <label className="form-label">{props.config.title}</label>
            <input className="form-control" type={props.config.type} name={props.config.name} />
        </div>
    )
}

export default Input;