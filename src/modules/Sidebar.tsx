import React from 'react';
import SidePop from '../SidePop'
import { Link } from 'react-router-dom'

// Each header should be a link as well, should explain general proficiencies with the technology or thing

const sidePop1 = 'Applications'
const sideArray1 = ['Electron Chess Analytics', 'Visual Studio']

const sidePop2 = 'Webapps'
const sideArray2 = ['Flow', 'Webcommerce Project', 'My Website']

const sidePop3 = 'Python'
const sideArray3 = ['Python Data Manipulation', 'Machine learning']

const sidePop4 = 'Scripting'
const sideArray4 = ['Powershell', 'Excel Formulas']

const sidePop5 = 'Database Modeling'
const sideArray5 = ['SQL Webcommerce']

const sideNames = [sidePop1, sidePop2, sidePop3, sidePop4, sidePop5]
const sideDetails = [sideArray1, sideArray2, sideArray3, sideArray4, sideArray5]
const sideLinks = sideDetails.map(subArray => 
  subArray.map(item => 
    'portfoliosite/' + item.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/ /g, '-')
  )
);

interface SidebarProps {
    orient: string
}

const Sidebar: React.FC<SidebarProps> = ({ orient }) => {
    const threeBarsUrl = new URL('../assets/img/icon/threeBars.svg', import.meta.url).href;

    return (
        <>
        <img id='threeBars' src={threeBarsUrl} alt="Menu" />
        <Link to='/portfoliosite' id="titleLink" style={{textDecoration:"none"}}>Noah Zaranka</Link>
        <div className={orient === "landscape" ? "landscape-class" : "portrait-class"}>
            {sideNames.map((name, index) => (
                <SidePop 
                    key={index} 
                    numTitles={sideNames.length} 
                    title={name} 
                    subtitles={sideDetails[index]} 
                    links={sideLinks[index]} 
                    orient={orient}
                />
            ))}
        </div>
        </>
    )
}

export default Sidebar;