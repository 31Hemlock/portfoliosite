import React, { Component } from 'react';

function SQL() {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> SQL Webcommerce </h1>
            <div className="block">
                <h3 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Fully featured SQL database. </h3>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> For a college project I created an SQL database, complete with triggers, procedures, and an EER diagram that demonstrates the relationships between the tables.</p>
                <h4 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Source Code</h4>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> The SQL file can be found <a target="_blank" href="https://github.com/31Hemlock/SQL">here</a>.</p>

            </div>
            
        </div>
    )
}
 
export default SQL;

