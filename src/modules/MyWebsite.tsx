import React, { Component } from 'react';






function MyWebsite(props) {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> My Website </h1>
            <div className="block">
                <h3 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Purpose: Explain my coding portfolio to a random person. </h3>
                <p style={{textAlign:"left", padding:'3%', paddingTop:'0%;'}}> I made this website to house all of my coding projects and explain them to potential employers. It's powered by <b>React</b> and is functional on mobile and desktop.</p>
                <h4 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Source Code. </h4>
                <p style={{textAlign:"left", padding:'3%', paddingTop:'0%;'}}> The source code is available <a target="_blank" href="https://github.com/31Hemlock/portfoliosite">here.</a></p>

            </div>
            
        </div>
    )
}
 
export default MyWebsite;

