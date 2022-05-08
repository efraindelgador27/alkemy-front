
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//redux

import axios from 'axios';
import TableRecords from '../tableRecords/TableRecords';
import style from './newRecord.module.css'
import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import {setAllRecords,deleteRecord} from '../../redux/slicer/recordsSlice';

function Abm(props){  
  useEffect(()=>{
       
     axios.get(`http://localhost:8080/api/allrecords/${userId}`).then((res)=>{           
        let data=res.data.rows;    
        dispatch(setAllRecords(data))         
           
        }).catch((err)=>{console.log(err)})
    
   },[])

  const history=useHistory();
  const logueado=useSelector((state)=>state.identifier.isAutenticate);
  const records=useSelector((state)=>state.records.records);
  const dispatch=useDispatch();
  const userId=useSelector((state)=>state.identifier.user_id);
 

     function Delete(e){
       const id=e.target.id;
       dispatch(deleteRecord({id}))
       console.log(`Front id: ${id}`)  
      
      axios.delete(`http://localhost:8080/api/deleteRegister/${id}`)
      .then((res)=>{console.log(res);dispatch(deleteRecord(id));
       history.push('/');
      })
      .catch((err)=>{console.log(err)})
       
    }
    function Add(props){
      return <>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={style.btnAdd} viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>
      </>
    }
    if(!logueado){history.push('/'); return <></>}else{

      return(
        <>
        {records[0]?<TableRecords home={false} records={records} history={history} Delete={Delete}/>:<div className={style.container}><h1>No existen registros aun</h1> <Link to={`/newRecord`}><Add/></Link></div>}       
        </>
        
      )
    }    
};


export default Abm;