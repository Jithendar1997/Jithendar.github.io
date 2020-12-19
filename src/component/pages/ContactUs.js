import React from "react";
import {  makeStyles,  Paper } from '@material-ui/core'
import { NavLink } from "react-router-dom";





const style = makeStyles({


})

const ContactUs = () => {




    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Contact Us </h2>

            <h5 style={{ textAlign: 'center' }}>Have any questions? We'd love to hear from you</h5>
            
          <div style={{paddingTop:'2em',paddingLeft:'3em'}}>
          <button style={{backgroundcolor:'blue'}}>
           <NavLink  style={{backgroundcolor:'black'}}  className="nav-link" exact to="/OrganizersContact" >OrganizersContacts </NavLink>
               </button>
          </div>
            
            {/* <div>
                <div>
                    <Paper style={{ width: '10cm', height: '10cm', padding: '2em', marginLeft: '2em', marginBottom: '2cm', backgroundColor: '#c5d6d0' }} >
                        <h3>Banoth Jithendar Naik</h3><br></br>
                        <h1></h1>
                    </Paper>
                </div>
                <div style={{ marginBottom: '10em' }}>
                    <Paper style={{ width: '10cm', height: '10cm', padding: '2em', marginLeft: '27em', marginBottom: '80em', backgroundColor: '#c5d6d0' }} >
                        <h3>Banoth Jithendar Naik</h3><br></br>
                        <h1></h1>
                    </Paper>

                    
                </div>
            </div> */}

        </>


    )
};

export default ContactUs;