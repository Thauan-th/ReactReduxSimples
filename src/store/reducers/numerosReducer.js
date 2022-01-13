import { type } from "../actions/nameActions"
const initialState = {
    min:1,
    max:100
}
export default function(state = initialState,action){
    switch(action.type){

        case type[0]:
                
            return {...state , min : action.payload}
        case type[1]:
            return {...state,max:action.payload}
        default :
            return state
            
    }
}