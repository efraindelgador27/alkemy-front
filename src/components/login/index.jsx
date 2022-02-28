// react
import {useState}from 'react';
import Input from '../Input';

// libs
import {handleChange,handleSubmite} from '../../libs'

//router

import {useHistory} from 'react-router-dom'

// redux

import {logOut,identifying}from '../../redux/slicer/autenticateSlice';
import {useDispatch,useSelector} from 'react-redux';


function Login(props){
    const [fields,setFields]=useState({})
    const [errLog,setErrLog]=useState(false);

    const dispatch=useDispatch();

    let history=useHistory();
    const err=<span>Tu contraseña o password son incorrectos</span>;
    return(
        <div>
            <form onChange={(e)=>{handleChange(e,setFields,fields)}}>
                <Input config={{name:"email",tpe:"email",title:"Email"}}/>
             
                <Input config={{name:"pass",tpe:"password",title:"Password"}}/>
                {errLog?err:<></>}
                <div>
        <button onClick={async(e)=>{
            
            const user=await handleSubmite(e,fields,'http://localhost:8080/api/login'); 
            console.log(user);
            if(user.isAutenticate){
                dispatch(identifying(user))
                history.push('/');
            }
            else{setErrLog(true)}
            }} type="submit">add</button>
        <button >canselar</button>
      </div>
    </form>
    </div>
    )
}

export default Login;