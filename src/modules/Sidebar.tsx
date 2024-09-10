import React from 'react';
import SidePop from '../SidePop'
import { Link } from 'react-router-dom'
import { sideNames, sideLinks, sideDetails } from '../data/SidebarData';
// Each header should be a link as well, should explain general proficiencies with the technology or thing



const Sidebar: React.FC = () => {

    return (
        <div className="p-14 bg-sidebar-grey">
            <Link to='/portfoliosite' className="text-header-white text-4xl font-normal mx-auto w-full item-direction-for-left-scrollbar text-center block ">Noah Zaranka</Link>
            <div className="mt-4 item-direction-for-left-scrollbar">
                {sideNames.map((name, index) => (
                    <SidePop 
                        key={index} 
                        numTitles={sideNames.length} 
                        title={name} 
                        subtitles={sideDetails[index]} 
                        links={sideLinks[index]} 
                        isMobile={false}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;