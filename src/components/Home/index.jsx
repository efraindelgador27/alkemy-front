// react
import React from 'react';
import TableRecords from '../TableRecords';
import { useEffect } from 'react';
// redux 

import { useDispatch, useSelector } from "react-redux";
import {setLastTen} from '../../redux/slicer/recordsSlice';
// router

import { Link } from 'react-router-dom';
// others

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
   const records=useSelector((state)=>state.records.lastTen)
   const dispatch=useDispatch();
   useEffect(()=>{
    axios.get(`http://localhost:8080/api/lasttensrecords/${id}`).then((res)=>{     
       
      const lastTentRecords=res.data.rows;

      dispatch(setLastTen(lastTentRecords));
      console.log(lastTentRecords)

      }).catch((err)=>{console.log(err)})
   },[])
   
    if(!logueado){return noLoged}else{
      return (
    
        <div className="container">
           <h1> welcome !! tenks for see us and be welcome people off Alkemy</h1> 
           {records?<TableRecords home={true} records={records}/>:<></>}
        </div>
      )
    }
 
};

export default Home;