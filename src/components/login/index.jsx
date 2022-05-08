// react
import {useState}from 'react';
import Input from '../Input';
import style from './logIn.module.css';
import Btn from '../btn/btn';
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
    const [visible,seVisible]=useState(true)
    const dispatch=useDispatch();

    let history=useHistory();
    const err=<span>Tu contraseña o password son incorrectos</span>;


    return(
        <div className={style.container}>
                 <div className={visible?style.card:style.b}>
                    <h3 className={style.title}>Log in</h3>
                <form onChange={(e)=>{handleChange(e,setFields,fields)}}>
                    <Input err={true} config={{name:"email",tpe:"email",title:"Email"}}/>
                
                    <Input config={{name:"pass",tpe:"password",title:"Password"}}/>
                    {errLog?err:<></>}
                </form>
                    <div>
                        <Btn title="enter" CB={async(e)=>{    
                                              
                            const user=await handleSubmite(e,fields,'http://localhost:8080/api/login');  
                            
                            localStorage.setItem("token",user.token);
                            
                            if(user.isAutenticate){
                                dispatch(identifying(user))
                                seVisible(!visible);
                                setTimeout(() => {
                                    history.push('/');         
                                }, 2500);
                            }
                            else{
                                setErrLog(true);
                                console.log("salio cagada")
                            }
                            }} type="Get in"/>

                        <Btn title="Cancel" CB={()=>{
                            seVisible(!visible);
                            setTimeout(() => {
                                history.push('/');         
                            }, 2500);
                            }}/>
                    </div>
              
                 </div>            
        </div>
    )    
}

export default Login;

