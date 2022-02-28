import { createSlice } from "@reduxjs/toolkit";

const recordsSlice=createSlice({
    name:'records',
    initialState:{
        records:[]},
        lastTen:[],
    reducers:{
        setAllRecords:(state,action)=>{
            console.log(`Data dending: ${action.payload}`)
            state.records=action.payload;            
        },        
        setLastTen:(state,action)=>{
            state.lastTen=action.payload
        },
        addRecord:(state,action)=>{
            state.records=[...state,action.payload]
        },
        editRecord:(state,action)=>{
           const r= state.records.filters((record)=>record.id=action.payload.id)[0];
           console.log(r)
        },
    }
});

export default recordsSlice.reducer;

export const{setAllRecords,editRecord,addRecord,setLastTen}=recordsSlice.actions;
 