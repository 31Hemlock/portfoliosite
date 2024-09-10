import React, { useState } from 'react';
import SidePop from '../SidePop'
import { Link } from 'react-router-dom'
import { sideNames, sideLinks, sideDetails } from '../data/SidebarData';

// Each header should be a link as well, should explain general proficiencies with the technology or thing

const MobileSidebar: React.FC = () => {
    const [mobileShowMenu, setMobileShowMenu] = useState(false);

    const toggleMobileShowMenu = () => {
        setMobileShowMenu(!mobileShowMenu)
    }

    const threeBarsUrl = new URL('../assets/img/icon/threeBars.svg', import.meta.url).href;

    return (
        <>
        <img className=" w-[32px] h-[32px] m-4 cursor-pointer " src={threeBarsUrl} alt="Menu" onClick={() => toggleMobileShowMenu()}/>
        <Link to='/portfoliosite' className="text-header-white mx-auto w-full text-center block text-3xl pb-4" >Noah Zaranka</Link>
            <div className={`px-16 pb-4 grid transition-all duration-[500ms] ${mobileShowMenu ? "grid-rows-[1fr] opacity-100 blur-none" : "grid-rows-[0fr] opacity-0 blur-xl"}`}>
            <div className="overflow-hidden">
                {sideNames.map((name, index) => (
                    <SidePop 
                        key={index} 
                        numTitles={sideNames.length} 
                        title={name} 
                        subtitles={sideDetails[index]} 
                        links={sideLinks[index]}
                        mobileShowMenu={mobileShowMenu}
                        setMobileShowMenu={setMobileShowMenu}
                        isMobile={true}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default MobileSidebar;