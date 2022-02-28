import {useState}from 'react';
import Input from '../Input';
import {handleChange} from '../../libs'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Choise from './Choise';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//redux

import {useSelector} from 'react-redux';


import axios from 'axios';



function EditRecord(props){  
  const userId=useSelector((state)=>state.identifier.user_id)
  const {id}=useParams()


  const cuerpo={
    monto:0,
    fecha:"",
    categoria:"",
    concepto:"",
    user_id:userId
 }

  const [fields,setFields]=useState(cuerpo);

  const history=useHistory();

  const handleSubmite=async function(e){
    e.preventDefault();
    
    axios.put(`http://localhost:8080/api/updaterecord/:${id}`,cuerpo)
        .then(response => console.log(response))
        .catch(error => {            
            console.error('There was an error!', error);
        });
   }

  const logueado=useSelector((state)=>state.identifier.isAutenticate);

  function cancelar(){}


if(!logueado){history.push('/'); return <></>}
      return(
        <div className='card' >
        
        <form onChange={(e)=>{handleChange(e,setFields,fields)}}>

          <Input config={{name:"concepto",title:"Concept",type:"text"}}/>                   
    
          <Input config={{name:"monto",title:"Amount",type:"number"}}/>
    
          <Choise options={["Select","comida","entretenimineto","ropa","salud","hogar"]} title="categoria" name="categoria" cb={setFields}/>
          
          <Input config={{name:"fecha",title:"Date",type:"date"}}/>
          
          <div className="container">
            
            <button className="btn btn-info btn-sm" onClick={(e)=>{handleSubmite(e,fields)}} type="submit">add</button>
            <button className="btn btn-danger btn-sm" onClick={cancelar}>canselar</button>
          </div>
        </form>  
        </div>
        )
      
};


export default EditRecord;