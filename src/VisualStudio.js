import React, { Component } from 'react';
import './VisualStudio.css';

import cover_vid from './vid/visual_studio.mp4'




function VisualStudio(props) {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> InvestNMe Consulting Project </h1>
            <video id='webcommerce_vid'src={cover_vid} style={{width:"90%", height:'auto'}} autoPlay controls></video>
            <div className="block">
                <h3>Full-stack application in Visual Studio. </h3>
                <p> For this project, our group had to develop an investing assistant application in Visual Studio. The application takes user preferences, such as how risky they would like their portfolio to be, and builds a 10 year investment portfolio based on that information.</p>
                <h4>Technology</h4>
                <p>
                    The project was coded in Visual Studio and connects to an <b>Access</b> database, which stores information about different kinds of stocks such as their expected return rate, riskiness value, and social equity. <b>Visual Basic</b> code receives this data and uses Microsoft's <b>Solver</b> function to determine the optimal allocation of money based on user preferences.
                </p>
                <h4>Source Code</h4>
                <p>
                    The source code is available <a target="_blank" href="https://github.com/31Hemlock/DSSPortfolioOptimization">here</a>.
                </p>
            </div>
            
        </div>
    )
}
 
export default VisualStudio;

