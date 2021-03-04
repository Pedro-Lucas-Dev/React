import React from 'react'

export const FamilyMember = ({name, lastName}) => {
    return(
        <div> 
            {name} <strong> {lastName} </strong>
        </div> 
    )
}