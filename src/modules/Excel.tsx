import React, { Component } from 'react';


// import cover_img from './assets/img/excel.png'




function Excel() {
    // Populate the main page.
    return (
        <div className="mainContent">
            <h1 style={{padding:"3%", margin_bottom:"0px"}}> Excel </h1>
            {/* <img src={cover_img} style={{width:"90%", height:'auto'}}></img> */}
            <div className="block">
                <h3 style={{marginBottom:'2%', border_bottom: "10px solid black"}}>Excel macros and scripting.</h3>
                <p style={{textAlign:"left", padding:'3%', paddingBottom:'2%'}}> Attached to <a target="_blank" href="https://github.com/31Hemlock/ExcelSheets" download>this link</a> are some of my Excel spreadsheets that contain advanced formulas or macros.</p>

            </div>
            
        </div>
    )
}
 
export default Excel;

