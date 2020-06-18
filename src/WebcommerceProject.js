import React, { Component } from 'react';
import './WebcommerceProject.css';

import cover_vid from './vid/webcommerce_project.mp4'




function WebcommerceProject(props) {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> Webcommerce Project </h1>
            <video id='webcommerce_vid'src={cover_vid} style={{width:"90%", height:'auto'}} autoPlay controls></video>
            <div className="block">
                <h3 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Buy and rent games over the internet. </h3>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> In college I worked on a three person group project to create an e-commerce website complete with <b>PHP</b> scripting and an <b>SQL</b> backend. My personal contributions to the project are shown in the video. The website allows users to log in, find games to purchase or rent, and order them. It maintains their cart and purchase history in the SQL database, and also allows admins to edit game information natively without touching SQL code. Each of the forms has error-checking and submits to the database.</p>
                <h4>Source Code</h4>
                <p>
                The source code is available <a target="_blank" href="https://github.com/31Hemlock/WebcommerceProject">here.</a>
                </p>

            </div>
            
        </div>
    )
}
 
export default WebcommerceProject;

