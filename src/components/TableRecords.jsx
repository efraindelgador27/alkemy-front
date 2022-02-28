
function Item(props){

  function Edit(props){return(
      <>
      <td onClick={()=>{props.linkTo.push(`/editRecord/${props.id}`)}} >add</td>       
          <td   className='btn-close' id={props.id} onClick={function(e){          
          props.cb(e);
          }}></td>
      </>
  )}
  return(
        
        <tr>      
          <td  >{props.monto}</td>
          <td >{props.concepto}</td>
          <td  >{props.categoria}</td>
          <td  >{props.fecha}</td>
          <td  >{props.tipo}</td>
          {props.home?<></>: <Edit id={props.id} linkTo={props.linkTo} cb={props.cb}/>}
         
        </tr>                                      
  )
}

function BtnNew(props){return <button className='btn btn-outline-primary' onClick={()=>{props.history.push('/newRecord')}}>new register</button>}

function TableRecords(props){  
   
      return(
        <div className='container'> 
          
          <table class="table table-dark table-hover  ">
          <tbody>         
          {props.records.map((record) =>
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
          {props.home?<></>:<BtnNew history={props.history}/>}
        </div>            
        )   
};

export default TableRecords;