import {useState}from 'react';
import Input from '../Input';
import {handleChange,handleSubmite} from '../../libs'
import style from './sigIn.module.css';
import Btn from '../btn/btn';
import { useHistory } from 'react-router-dom';

function SigIn(props){
    const [fields,setFields]=useState({})
    const [visible,seVisible]=useState(true)
    const history=useHistory();
    return(
        <div className={style.container}>
            <div className={visible?style.card:style.b}>
                <h3 className={style.title}>sig in</h3>
                <form onChange={(e)=>{handleChange(e,setFields,fields)}}>
                    <Input config={{name:"email",tpe:"email",title:"Email"}}/>                
                    <Input config={{name:"pass",tpe:"password",title:"Password"}}/>
                    <Input config={{name:"confirmPass",tpe:"pasword",title:"Confirm pasword"}}/>                
                </form>
                <div>
                <Btn title="Register" CB={(e)=>{handleSubmite(e,fields,'http://localhost:8080/api/sigin')}}/>
                <Btn title="Cancelar" CB={()=>{
                    seVisible(!visible);
                    setTimeout(() => {
                        history.push('/');
                    }, 1500);
                    }}/>
                </div>    
            </div>
            
      </div>    
    )
}

export default SigIn;