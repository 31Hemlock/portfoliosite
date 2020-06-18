import React, { Component, useState } from 'react';
import SidePop from './SidePop'
import './Sidebar.css';
import python from './img/icon/python.png'
import other from './img/icon/user.png'
import { Link } from 'react-router-dom'
import threeBars from './img/threeBars.svg'
 
// Each header should be a link as well, should explain general proficiencies with the technology or thing


var sidePop1 = 'Applications'
var sideArray1 = ['Electron Chess Analytics', 'Visual Studio']

var sidePop2 = 'Webapps'
var sideArray2 = ['Flow', 'Webcommerce Project', 'My Website']

var sidePop3 = 'Python'
var sideArray3 = ['Python Data Manipulation', 'Machine learning']

var sidePop4 = 'Scripting'
var sideArray4 = ['Powershell', 'Excel Formulas']

//var sidePop5 = 'Class diagrams, OOSAD'


var sidePop5 = 'Database Modeling'
var sideArray5 = ['SQL Webcommerce']

//var sidePop6 = 'Miscellaneous'

var sideNames = [sidePop1, sidePop2, sidePop3, sidePop4, sidePop5]
var sideDetails = [sideArray1, sideArray2, sideArray3, sideArray4, sideArray5]
var sideLinks = [[]]
var subtitle = [];
var numTitles = sideNames.length

for (var i = 0; i < sideDetails.length; i++) {
    console.log(sideLinks[i])
    console.log(sideDetails[i])
    subtitle = [];
    for (var j = 0; j < sideDetails[i].length;j++) {
        subtitle[j] = sideDetails[i][j]
        subtitle[j] = subtitle[j].toLowerCase()
        subtitle[j] = subtitle[j].replace(/[^a-zA-Z ]/g, "")
        subtitle[j] = subtitle[j].replace(/ /g, '-')
        subtitle[j] = 'portfoliosite/' + subtitle[j]

    }
    console.log(subtitle)
    console.log(sideLinks)
    sideLinks[i] = subtitle

}


var imageLinks = [{python}, {other}]


function Sidebar(props) {
    var [sidebarSize, setSidebarSize] = useState('sections smallHidden');
    
    var changeSidebar = (event) =>
    {
        if (sidebarSize.includes(' smallHidden')) {
            sidebarSize = sidebarSize.replace(' smallHidden', '')
            setSidebarSize(sidebarSize)

            console.log(sidebarSize)
        }
        else {
            sidebarSize += ' smallHidden'
            setSidebarSize(sidebarSize)
            console.log(sidebarSize)

        }
    }


    return (
        <>
        <img id='threeBars'src={threeBars}onClick={changeSidebar}></img>
        <Link to='/portfoliosite' id="titleLink" style={{textDecoration:"none"}}>Noah Zaranka</Link>
        <div className={sidebarSize}>
            {sideNames.map(function(name, index){
                return <SidePop key={index} numTitles={numTitles} title={name} subtitles={sideDetails[index]} links={sideLinks[index]} orient={props.orient}/>
            })}
        </div>
        </>
    )
}

export default Sidebar;