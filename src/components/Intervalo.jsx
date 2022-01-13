import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { alterarNumeroMinimo , alterarNumeroMaximo} from '../store/actions/numerosActions'
import { connect } from 'react-redux'
const Intervalo = props=>{
    const{min,max}=props
    
    return(
        <Card title="Intervalo de Numeros" red>
           <div className='Intervalo'>
            <span>
                <strong>Minimo:</strong>
                <input type="number" value={min} onChange={e=>props.alterarMinimo(+e.target.value)} />
            </span>
            <span>
                <strong>Maximo:</strong>
                <input type="number" value={max} onChange={e=>props.alterarMaximo(+e.target.value)}/>
            </span>
           </div>
        </Card>

    )
}

function mapStateToProps(state){
    return {
        min : state.numeros.min,
        max:state.numeros.max
    }
}
function mapDispatchToProps(dispatch){
    return {
        alterarMinimo(novoNum){
            //ActionCreator
            const action = alterarNumeroMinimo(novoNum)
            dispatch(action)
        },
        alterarMaximo(novoNum){
            const action = alterarNumeroMaximo(novoNum)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Intervalo) 