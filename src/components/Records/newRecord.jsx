import {useState}from 'react';
import Input from '../Input';
import {handleChange} from '../../libs'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import style from './newRecord.module.css'
import axios from 'axios';
//redux

import {useSelector,useDispatch} from 'react-redux';
import { setAllRecords } from '../../redux/slicer/recordsSlice';
import Choise from './choise/choise';


function AddRecord(props){  
  const userId=useSelector((state)=>state.identifier.user_id)
  const history=useHistory();
  const dispatch=useDispatch();
  const records=useSelector((state)=>state.records.records);
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
    
     await axios.post('http://localhost:8080/api/saveRegister',fields)
     .then((res)=>{     
       record=res.data.record;      

       let Records=[...records,record]
       
    
       dispatch(setAllRecords(Records))
     })
     .catch((err)=>{console.log(err)})
     return record;
   }

  function cancelar(e){e.preventDefault();history.push('/')}

  if(!logueado){history.push('/'); return <></>}
      return(
             
        <div className={style.container}>
        <form onChange={(e)=>{handleChange(e,setFields,fields)}}>
          <Input config={{name:"concepto",title:"Concept",type:"text"}}/>      
          
          <Choise options={["select","gasto","ingreso"]} title="Type" name="tipo" cb={setFields}/>
    
          <Input config={{name:"monto",title:"Amount",type:"number"}}/>
    
          <Choise options={["select","comida","entretenimineto","ropa","salud","hogar","servicios","inversion","trabajo","eventualidad"]} title="Categori" name="categoria" cb={setFields}/>
          
          <Input config={{name:"fecha",title:"Date",type:"date"}}/>
          
          <div>
            <button className='btn btn-outline-primary'  onClick={(e)=>{handleSubmite(e,fields);history.push(`/`)}} type="submit">add</button>
            <button className='btn btn-outline-danger'  onClick={cancelar}>canselar</button>
          </div>
        </form>
        </div>
        )
     
};


export default AddRecord;