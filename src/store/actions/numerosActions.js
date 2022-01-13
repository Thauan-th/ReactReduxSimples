import { type } from "./nameActions"
export function alterarNumeroMinimo(novoNum){
    return{
        type: type[0],
        payload : novoNum
    }
}
export function alterarNumeroMaximo(novoNum){
    return {
        type:type[1],
        payload : novoNum
    }
}