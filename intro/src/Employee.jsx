import React from 'react';

const Employee= (props) =>{
    const {lastName,firstName, employeeAge} = props
    return(
        <div>
            <h2>Employee: {firstName} {lastName} {employeeAge}</h2>
        </div>
        
    )
}

export default Employee;