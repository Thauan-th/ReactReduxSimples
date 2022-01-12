import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
const Media = props=>{
    return(
        <Card title="Media dos Numeros" purple>
           <div >
            <span>
                <span>Resultado:</span>
                <strong>50</strong>               
            </span>
           </div>
        </Card>

    )
}
const mapStateToPropos =state=>{
    
}
export default connect()(Media);