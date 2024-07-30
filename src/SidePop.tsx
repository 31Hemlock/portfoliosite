import React, { Component } from 'react';
import { tsPropertySignature } from '@babel/types';
import { Link } from 'react-router-dom'

interface SidePopProps {
    subtitles: string[]
    numTitles: number
    title: string
    links: string[]
    orient: string
}

const SidePop: React.FC<SidePopProps> = ({ subtitles, title, links }) => {

    let listItems = subtitles.map((subtitle, index) =>
        <Link className='subtitle' key={subtitle} to={`/${links[index]}`}>{subtitle}</Link>
    );

    return (
        <div className="section">
            <h5 className="catTitle">{title}</h5>
            <div className="catSubtitle">{listItems}</div>
        </div>
    )
}
 
export default SidePop;