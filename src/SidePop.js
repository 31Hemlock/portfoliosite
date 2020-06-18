import React, { Component } from 'react';
import './SidePop.css';
import { tsPropertySignature } from '@babel/types';
import { Link } from 'react-router-dom'
import { link } from 'fs';


var x = 0
var listItems = 0
var showImages = 0
var spacing = 2



function SidePop(props) {


    listItems = props.subtitles.map((subtitle, index) =>
        <Link className='subtitle' key={subtitle} onClick={props.changeSidebar}to={`/${props.links[index]}`}>{subtitle}</Link>
    );

    return (
        <div className="section">
            <h5 className="catTitle">{props.title}</h5>
            <div className="catSubtitle">{listItems}</div>
        </div>
    )
}
 
export default SidePop;