import React from 'react'

export const Parameter = ({ 
    title, 
    student, 
    note,
})=> {
    
    const status = note >= 7 ? 'Passed' : 'Not Passed'

    return(
        <div>
             <h2> { title } </h2>
            <p> 
                <strong> { student } </strong>
                note:
                <strong> { note } </strong>
                the student:
                <strong> { status } </strong>
            </p>  
        </div>
    )
}

