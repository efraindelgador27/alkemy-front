import {useState}from 'react';
import Input from '../Input';
import {handleChange,handleSubmite} from '../../libs'


function SigIn(props){
    const [fields,setFields]=useState({})
 
    return(
        <div>
            <form onChange={(e)=>{handleChange(e,setFields,fields)}}>
                <Input config={{name:"email",tpe:"email",title:"Email"}}/>                
                <Input config={{name:"pass",tpe:"password",title:"Password"}}/>
                <Input config={{name:"confirmPass",tpe:"pasword",title:"Confirm pasword"}}/>                
                <div>
        <button onClick={(e)=>{handleSubmite(e,fields,'http://localhost:8080/api/sigin')}} type="submit">add</button>
        <button >canselar</button>
      </div>
    </form>
    </div>
    )
}

export default SigIn;