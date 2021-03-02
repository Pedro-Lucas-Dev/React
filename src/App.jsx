import React from 'react'

import { First } from './Components/Basic/First'
import { Parameter } from './Components/Basic/Parameter'
import { Fragmento } from './Components/Basic/Fragmento'
import { Random } from './Components/Basic/Random'
import { Resultado } from './Components/Basic/Resultado'

export const App = props => {
    return(
        <div id="app">
            <h1> React Fundamentals: </h1>
            <First
                title='welcome'
            />
            <Parameter
                title='student situation: '
                student='Pieter'
                note={10}
            />
            <Fragmento />
            <Random 
                title='Random Value:'
                min={1}
                max={100}
            ></Random>
            <Resultado name={"Thiago"} nota={5} status={'recuperacao'}  />
            <Resultado name={"Pedro"} nota={8} status={'aprovado'}  />
            <Resultado name={"Charley"} nota={3.5} status={'reprovado'} />
        </div>
    )
}

