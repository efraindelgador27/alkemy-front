import { createSlice, current } from "@reduxjs/toolkit";

const recordsSlice=createSlice({
    name:'records',
    initialState:{
        records:[],        
        lastTen:[],
        balance:0,        
    },
       
        
    reducers:{
        setAllRecords:(state,action)=>{                
            state.records=[...action.payload];                     
        },                    

        editRecord:(state,action)=>{
           const noSelectedRecord= state.records.filter((R)=>R.id!==action.payload.editedRecord.id);           
        
           state.records=[...noSelectedRecord,action.payload.editedRecord]
        },
        deleteRecord:(state,action)=>{
            const noSelectedRecord= state.records.filter((R)=>R.id!==action.payload.id);               
            state.records=[...noSelectedRecord];
        },
        setBalance:(state,action)=>{
            let total=0;
            action.payload.forEach(element => {
                element.tipo==="gasto"?total-=parseInt(element.monto):total+=parseInt(element.monto);
            });
            state.balance=total
        }
    }

});

export default recordsSlice.reducer;

export const{setAllRecords,editRecord,addRecord,deleteRecord,setBalance, setToken}=recordsSlice.actions;
 