import React, { Component } from 'react';


// import cover_vid from './assets/vid/powershell.mp4'




function Powershell(props) {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> Powershell Downloader Script </h1>
            <div className="block">
                <h3 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Download audio files from YouTube. </h3>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> This script downloads audio files from YouTube using <b>youtube-dl</b> and <b>ffmpeg</b>, renames them, and places them under my music directory in the proper folder.</p>
                <h4 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Source Code </h4>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> The source code is available <a target="_blank" href="https://github.com/31Hemlock/DLYoutubeMP3">here.</a></p>

            </div>
            
        </div>
    )
}
 
export default Powershell;

