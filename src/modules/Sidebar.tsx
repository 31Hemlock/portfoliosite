import React from 'react';
import SidePop from '../SidePop'
import { Link } from 'react-router-dom'
import { sideNames, sideLinks, sideDetails } from '../data/SidebarData';
// Each header should be a link as well, should explain general proficiencies with the technology or thing



const Sidebar: React.FC = () => {

    return (
        <div className="py-20 sm:p-14 bg-sidebar-base">
            <Link to='/portfoliosite' className="text-header-white text-4xl font-normal mx-auto w-full text-center block hover:text-hover-highlight">Noah Zaranka</Link>
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