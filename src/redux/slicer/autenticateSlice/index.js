import { createSlice } from "@reduxjs/toolkit";

const autenticateSlice=createSlice({
    name:'identifier',
    initialState:{
        isAutenticate:false,
        userEmail:"",
        user_id:0,
        token:"",
    },
    reducers:{
        identifying:(state,action)=>{
            state.isAutenticate=action.payload.isAutenticate;
            state.userEmail=action.payload.userEmail
            state.user_id=action.payload.userId
            state.token=action.payload
        },

        setToken:(state,action)=>state.token=action.payload,    

        logOut:(state)=>{
            state.isAutenticate=false;
            state.userEmail="";
        }
    }
});

export default autenticateSlice.reducer;

export const{identifying,logOut}=autenticateSlice.actions;
