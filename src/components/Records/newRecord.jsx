import {useState}from 'react';
import Input from '../Input';
import {handleChange} from '../../libs'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios';
//redux

import {useSelector} from 'react-redux';

import Choise from './Choise';


function AddRecord(props){  
  const userId=useSelector((state)=>state.identifier.user_id)
  const history=useHistory();

  const cuerpo={
    monto:0,
    fecha:"",
    tipo:"",
    categoria:"",
    concepto:"",
    user_id:userId
 }
  const [fields,setFields]=useState(cuerpo);

  const logueado=useSelector((state)=>state.identifier.isAutenticate);

  const handleSubmite=async function(e){
    e.preventDefault();
    
     let record;
     console.log(fields)
     await axios.post('http://localhost:8080/api/saveRegister',fields)
     .then((res)=>{     
       record=res.data;      
     })
     .catch((err)=>{console.log(err)})
     return record;
   }

  function cancelar(){}

  if(!logueado){history.push('/'); return <></>}
      return(
             
        <div className='card'>
        <form onChange={(e)=>{handleChange(e,setFields,fields)}}>
          <Input config={{name:"concepto",title:"Concept",type:"text"}}/>
          
          <Choise options={["gasto","ingreso","invercion"]} title="type" name="tipo" cb={setFields}/>
    
          <Input config={{name:"monto",title:"Amount",type:"number"}}/>
    
          <Choise options={["comida","entretenimineto","ropa","salud","hogar"]} title="categoria" name="categoria" cb={setFields}/>
          
          <Input config={{name:"fecha",title:"Date",type:"date"}}/>
          
          <div>
            <button className='btn btn-outline-primary'  onClick={(e)=>{handleSubmite(e,fields);history.push('/')}} type="submit">add</button>
            <button className='btn btn-outline-danger'  onClick={cancelar}>canselar</button>
          </div>
        </form>
        </div>
        )
     
};


export default AddRecord;