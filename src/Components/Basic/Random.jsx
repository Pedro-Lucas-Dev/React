import React from 'react'

export const Random = props =>{

    const { title, min, max } = props
    const getRandom = Math.ceil(Math.random(max - min)* + max)

    return(
        <div>
            <h3> { title } </h3>
            <h2> { getRandom } </h2>
        </div>
    )
}