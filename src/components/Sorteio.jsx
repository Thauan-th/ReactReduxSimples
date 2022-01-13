import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
const Sorteio= props=>{
    const{min,max}=props
    return(
        <Card title="Sorteio de um Numero" green>
           <div >
            <span>
                <span>Resultado:</span>
                <strong>{parseInt(Math.random()*(max-min))+min}</strong>               
            </span>
           </div>
        </Card>

    )
}
function mapStateToProps(state){ //mapeando os estados para dentro das propriedades
    return {
        min:+state.numeros.min,
        max:+state.numeros.max,
    }
}
export default connect(mapStateToProps)(Sorteio);