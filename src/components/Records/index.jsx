import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//redux

import {useSelector,useDispatch} from 'react-redux';
import {setAllRecords}from '../../redux/slicer/recordsSlice';
import axios from 'axios';
import TableRecords from '../TableRecords';


function Abm(props){  
  const dispatch=useDispatch();    
  const {id}=useParams();
  const history=useHistory();
  const logueado=useSelector((state)=>state.identifier.isAutenticate);
  const records=useSelector((state)=>state.records.records);

    useEffect(()=>{

      if(logueado){
        axios.get(`http://localhost:8080/api/lasttensrecords/${id}`).then((res)=>{
       let data=res.data.rows;
      // console.log(data)
      dispatch(setAllRecords(data))
      }).catch((err)=>{console.log(err)})
      }   
      else{return}         
    },[])

     function Delete(e){
       const id=e.target.id
       console.log(`Front id: ${id}`)  
      
      axios.delete(`http://localhost:8080/api/deleteRegister/${id}`).then((res)=>{console.log(res);history.push('/')}).catch((err)=>{console.log(err)})
       
    }
   
    if(!logueado){history.push('/'); return <></>}else{

      return(
        <TableRecords home={false} records={records} history={history} Delete={Delete}/>
      )
    }    
};


export default Abm;