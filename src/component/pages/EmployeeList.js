import React from 'react'

export default function Employeelist(props) {
    

    return (
        
        <>
        <h1 style={{textAlign:'center'}}>Employee Details </h1>
         <div style={{paddingTop:'2em',paddingLeft:'3em'}}>
         <button style={{paddingRight:'1em'}} >
        <a  href="https://docs.google.com/forms/d/e/1FAIpQLSdVHqmB5JkflsTMYG3Oa__psH-ZQZzo-r3A0RB9ZnFjixWRBQ/viewform?usp=sf_link">Add Employee Form</a>
        </button>
         </div>
        

        <div style={{paddingTop:'2em',paddingLeft:'3em'}}>
        <button >
        <a  href="https://docs.google.com/spreadsheets/d/1MLDOC2uJa6AV7EA9ufUNmrXC--ow6A9IGPOsUfrb4N4/edit#gid=1304015708">View Employee List</a>
        </button>
        </div>
        </>


    )
}
