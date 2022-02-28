import { createSlice } from "@reduxjs/toolkit";


export const counterSlice= createSlice({
    name:'counter',
    initialState:{
        counter:0,
        userList:[]
    },
    reducers:{
        increment:(state)=>{
            state.counter+=1
        },
        decrement:(state)=>{
            state.counter-=1
        },
        incrementIn:(state, action)=>{
            state.counter+=action.payload;
        },
        setUserList:(state,action)=>{
            state.counter.userList=action.payload
        },
        
    }
})

export default counterSlice.reducer;

export const {incrementIn,decrement,increment,setUserList}=counterSlice.actions;



