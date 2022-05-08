import {useState}from 'react';
import Input from '../Input';
import {handleChange} from '../../libs'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Choise from './choise/choise';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Btn from '../btn/btn';
import style from './newRecord.module.css';
import { useEffect } from 'react';
//redux

import {useSelector,useDispatch} from 'react-redux';
import {editRecord,setBalance} from '../../redux/slicer/recordsSlice';


import axios from 'axios';



function EditRecord(props){  
  const {id}=useParams()  
  const userId=useSelector((state)=>state.identifier.user_id)

  const records=useSelector((state)=>state.records.records);

  
  const [fields,setFields]=useState({user_id:userId});

  const dispatch=useDispatch();
   
 useEffect(() => {
  async function  fetch(){
    console.log(`idRecord:${id} user id: ${userId}`)
    const {data}= await axios.get(`http://localhost:8080/api/onerecord/${id}/${userId}`);
  
    setFields({...fields,...data});
  }
  fetch();
 }, []);

 
 
  const history=useHistory();

  const handleSubmite=async function(e){
    e.preventDefault();
    
    axios.put(`http://localhost:8080/api/updaterecord/${id}`,fields)
        .then(response => {
        
          dispatch(editRecord({editedRecord:fields}))
          dispatch(setBalance(records));
          history.push(`/records/${userId}`);
        })
        .catch(error => {            
            console.error('There was an error!', error);
        });
   }

  const logueado=useSelector((state)=>state.identifier.isAutenticate);

  function cancelar(){
    history.push("/");
  }


if(!logueado){history.push('/'); return <></>}
      return(
        <div className={style.container} >
        
        <form onChange={(e)=>{handleChange(e,setFields,fields)}}>
     
          <Input config={{name:"concepto",title:"Concept",type:"text",value:fields.concepto}}/>                   
    
          <Input config={{name:"monto",title:"Amount",type:"number",value:fields.monto}}/>
    
          <Choise options={["Select","comida","entretenimineto","ropa","salud","hogar"]} title="categoria" name="categoria" cb={setFields}/>
          
          <Input config={{name:"fecha",title:"Date",type:"date",value:fields.fecha}}/>
          <div>
              
            <Btn CB={(e)=>{handleSubmite(e,fields);editRecord({id,fields})}} title="Confirm"/>
            <Btn CB={(e)=>{e.preventDefault(); console.log(fields)}} title="Cancel"/>
          </div>
        </form>      
        
        </div>
        )
      
};


export default EditRecord;