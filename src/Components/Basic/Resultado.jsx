import React, { useState } from 'react'

export const Resultado = ({name, nota, status = "default"}) => {

    const [statusRecuperacao, setStatusRecuperacao] = useState()

    let text = ''
    if(status === 'recuperacao') {
        text = <p>fazer prova novamente</p>
    } 
    
    const renderButtons = () => {
        if(status !== "recuperacao") {
            return null
        }

        return(
            <div>
                <button onClick={() => setStatusRecuperacao("Aprovado")}> Aprovado </button>
                <button onClick={() => setStatusRecuperacao("Reprovado")}> Reprovado </button>
            </div>
        )
    }

    return(
        <div>
            <h2> {name}-{status}</h2>
            {text} 
            {renderButtons()}
            {statusRecuperacao}
        </div>
    )
}