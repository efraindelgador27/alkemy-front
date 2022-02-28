import { createSlice } from "@reduxjs/toolkit";

const autenticateSlice=createSlice({
    name:'identifier',
    initialState:{
        isAutenticate:false,
        userEmail:"",
        user_id:0
    },
    reducers:{
        identifying:(state,action)=>{
            state.isAutenticate=action.payload.isAutenticate;
            state.userEmail=action.payload.userEmail
            state.user_id=action.payload.userId
        },
        logOut:(state)=>{
            state.isAutenticate=false;
            state.userEmail="";
        }
    }
});

export default autenticateSlice.reducer;

export const{identifying,logOut}=autenticateSlice.actions;
