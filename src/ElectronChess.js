import React, { Component } from 'react';
import './ElectronChess.css';

import cover_vid from './vid/chess_analytics.mp4'




function ElectronChess(props) {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> Chess Analytics </h1>
            <video id='webcommerce_vid'src={cover_vid} style={{width:"90%", height:'auto'}} autoPlay controls></video>
            <div className="block">
                <h3 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>View analytics about your style of play. </h3>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> Chess Analytics is an <b>Electron</b>-based application that accepts a <i>Lichess</i> username, analyzes all of the games on the account, and displays the analysis through the libraries <b>HighCharts</b> and <b>Chessground</b>. Each move is analyzed by <b>Stockfish</b> and uploaded to <b>MongoDB</b>. I use this data to give interesting information about the games to the user, such as the percentage of games they won when they castled kingside compared to queenside.</p>
                <p style={{textAlign:"left", padding:'3%', paddingTop:'0%;'}}> While I use <b>JavaScript</b> to display all frontend information, the backend analysis portion is written in <b>Python</b> - I analyze each move from the rated games on the account, then send the data to a MongoDB database. From the database, HighCharts and Chessground are fed data to create charts and board states.</p>
                <h4>Source Code</h4>
                <p>
                The source code is available <a target="_blank" href="https://github.com/31Hemlock/ChessAnalytics">here</a>.
                </p>
            </div>
            
        </div>
    )
}
 
export default ElectronChess;

