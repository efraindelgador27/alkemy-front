// react
import React from 'react';
import TableRecords from '../tableRecords/TableRecords';
import { useEffect } from 'react';
import style from './home.module.css';
import { useState } from 'react';
// redux 

import { useDispatch, useSelector } from "react-redux";
import {setAllRecords,setBalance} from '../../redux/slicer/recordsSlice';
// router


import axios from 'axios';


const noLoged=(
  <div>
    
    <h1>no logued home page</h1>
    <p>Est proyecto fue completado prcialmente, desearia haber entregao un desarrollo mas completo pero <br></br> lamentablemente no pude dedicar la cantidad de tiempo que deseaba invertir en el mismo</p>
    <h3>Puntos cubiertos:</h3>  
    <ul>
      <li>Formulario de registro de operación, con los campos requeridos</li>
      <li>Listado de operaciones registradas según su tipo</li>
      <li>Edicion parcial de registros</li>
      <li>Autenticación y alta de usuarios</li>
      <li>Categorías de operaciones</li>
    </ul>
  </div>
)

export function Home() {

   const logueado=useSelector((state)=>state.identifier.isAutenticate);

   const id=useSelector((state)=>state.identifier.user_id);
   const records=useSelector((state)=>{return [...state.records.lastTen]})
   
   const dispatch=useDispatch();
   const balance=useSelector((state)=>state.records.balance);

   const[lastTen,setLastTen]=useState([])

   useEffect(()=>{


    if(logueado){
      
      axios.get(`http://localhost:8080/api/allrecords/${id}`,{
        'Authorization':localStorage.getItem("token")
      }).then((res)=>{
     let data=res.data.rows;
     dispatch(setBalance(data))   
    }).catch((err)=>{console.log(err)})

    

    axios.get(`http://localhost:8080/api/lasttensrecords/${id}`).then((res)=>{     
       
      const lastTentRecords=res.data.rows;
      console.log(lastTentRecords)
      setLastTen(lastTentRecords)
      console.log(lastTen)
      
      }).catch((err)=>{console.log(err)})

    }   
    else{return}  
    
   },[])
   
    if(!logueado){return noLoged}else{
      return (
    
        <div className={style.container}>
          <h3><a href="https://www.tecnosoftware.com/about.php">Tecno_sofware_jobs</a></h3>
           <h1> welcome !! tenks for see us and be welcome people off Alkemy</h1>            
           <div>             
             <h3>Balance actual:{balance}</h3>
           </div>
           {lastTen[0]?<TableRecords home={true} records={lastTen}/>:<><h1>No existen registros aun</h1></>}
        </div>
      )
    }
 
};

export default Home;

