import React,{Component} from 'react';
import {useState}from 'react';
import { connect } from 'react-redux';
import Input from '../Input'
import {handleSubmite,handleChange} from '../../libs'


function SigIn(props){
    const [fields,setFields]=useState({})

    return(
        <div>
            <form onChange={(e)=>{handleChange(e,setFields,fields)}}>
                <Input config={{name:"email",tpe:"email",title:"Email"}}/>
                <Input config={{name:"confirmEmail",tpe:"email",title:"Confirm email"}}/>
                <Input config={{name:"password",tpe:"password",title:"Password"}}/>
                <Input config={{name:"confirmPasword",tpe:"pasword",title:"Confirm pasword"}}/>                
                <div>
        <button onClick={(e)=>{handleSubmite(e,fields)}} type="submit">add</button>
        <button >canselar</button>
      </div>
    </form>
    </div>
    )
}

export default SigIn;