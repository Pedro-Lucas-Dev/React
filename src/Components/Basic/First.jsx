import React from 'react'

export const First = props => {
    const {title} = props  
    return(
        <div>
            <h1> First Component newest </h1>
            <p> {title} </p>
        </div>
    )
}