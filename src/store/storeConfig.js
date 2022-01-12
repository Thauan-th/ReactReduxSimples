import {createStore,combineReducers} from 'redux'

const reducers = combineReducers({
    numeros : function(state,action){
        console.log(state,'action:',action)
        return {
            min:4,
            max:157
        }
    },
    nomes:function(state,action){
        return ['nome','nome','nome']
    }
})
function storeConfig(){
    return createStore(reducers)
}
export default storeConfig