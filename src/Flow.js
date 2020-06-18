import React, { Component } from 'react';
import './Flow.css';

import cover_vid from './vid/flow.mp4'




function Flow(props) {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> Flow </h1>
            <video src={cover_vid} style={{width:"90%", height:'auto'}} autoPlay controls></video>
            <div className="block">
                <h3>Eliminate worry, strengthen focus.</h3>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> Flow is a productivity website aimed at keeping track of tasks within categories. A user can create a new task by clicking the "Create new task" button and filling out information within the modal that appears. Most time using the program is spent in the Main category which I use to contain all of my short-term goals.
                </p>
                <p>
                Each flow task contains four values: title, preferred completion date, deadline, and notes. While the user can edit the notes on the main page by scrolling down in a task window, there's also a detail view that gives the user more space to write out their thoughts. In this view, the user can click the button on the bottom of the view to download the task title and notes in a text file.

                </p>
                <h4>Technology</h4>
                <p>
                Flow is a simple application powered by <b>JavaScript</b> and <b>jQuery</b>. Its <b>CSS</b> is aided by <b>Bootstrap</b>. Rather than using a database, it stores user information in a browser cookie.
                </p>
                <h4>Source Code</h4>
                <p>
                The source code is available <a target="_blank" href="https://github.com/31Hemlock/Flow">here</a>.
                </p>

            </div>

        </div>
    )
}
 
export default Flow;

