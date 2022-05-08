import style from './tableRecords.module.css'
import Choise from '../Records/choise/choise';
import { useState } from 'react';
import Btn from '../btn/btn'

function EditIcon(){
  return <>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
  </>
}

function Item(props){

  function Edit(props){return(
      <>
      <td onClick={()=>{props.linkTo.push(`/editRecord/${props.id}`)}} ><EditIcon/></td>       
          <td   className='btn-close' id={props.id} onClick={function(e){          
          props.cb(e);
          }}></td>
      </>
  )}
  return(<>      
        <tr className={props.tipo==='gasto'?style.gasto:style.ingreso}>      
          <td  >{props.monto}</td>
          <td >{props.concepto}</td>
          <td  >{props.categoria}</td>
          <td  >{props.fecha}</td>
          <td  >{props.tipo}</td>
          {props.home?<></>: <Edit id={props.id} linkTo={props.linkTo} cb={props.cb}/>}
         
        </tr>                                      
        </>
  )
}


function TableRecords(props){  
      const [categoria,setCategoria]=useState("todos");
      const [tipo,setTtipo]=useState("todos");
      const [records,setRecords]=useState([...props.records])
  
      const filter=()=>{        

        let r=props.records.filter((R)=>(R["categoria"]===categoria) && (R["tipo"]===tipo||tipo==="todos"));

        if(tipo==="todos"&&categoria==="todos"){r=props.records}
        
        else if(tipo==="todos"&&categoria!=="todos"){r=props.records.filter((R)=>(R["categoria"]===categoria))}
        else if(tipo!=="todos"&&categoria==="todos"){r=props.records.filter((R)=>(R["tipo"]===tipo||tipo==="todos"));}
        setRecords(r)
      };

      return(
        <div className={style.container}> 
        {props.home?<></>:
          <div className={style.panel}>           
          <Choise options={["todos","comida","entretenimineto","ropa","salud","hogar","servicios","inversion","trabajo","eventualidad"]} cb={setCategoria} title="Categori" name="categoria"/>
          <Choise options={["todos","gasto","ingreso"]} title="Tipo" name="tipo" cb={setTtipo}/>        
          <Btn title="Filtrar" CB={filter}/>
          <Btn title="Nuevo" CB={()=>{props.history.push('/newRecord')}}/>
                  
          </div>}
          <table className={style.table}>
            <thead>
              <tr>
              <td>Monto</td>
              <td>Concepto</td>
              <td>Categoria</td>
              <td>Fecha</td>
              <td>Tipo</td>
              {props.home?<></>:<><td>Edit</td><td>Delete</td></>}
              </tr>
            </thead>
            <tbody>         
            {records.map((record) =>
                <Item key={record.id}
                  id={record.id}
                  tipo={record.tipo}
                  monto={record.monto}
                  concepto={record.concepto}
                  categoria={record.categoria}
                  fecha={record.fecha}
                  cb={props.Delete}
                  linkTo={props.history}
                  home={props.home}
              />)}
              </tbody>
          </table>         
        </div>            
        )   
};

export default TableRecords;