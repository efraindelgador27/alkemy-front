import mamalo from '../actions/types'


const initialState={
    counter:0
} 
const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case mamalo.INCREMENT:
            return({...state,counter:state["counter"]+=1})       
        case mamalo.DECREMENT:
            return({...state,counter:state["counter"]-=1})     
        default:
            break
    }
}

export default counterReducer