import React from 'react'
import SidePop from '../SidePop'
import { Link } from 'react-router-dom'
import { sideNames, sideLinks, sideDetails } from '../data/SidebarData'

const Sidebar: React.FC = () => {
  return (
    <div className="py-20 sm:p-14 bg-sidebar-base">
      <Link
        to="/"
        className="text-header-white text-4xl font-normal mx-auto w-full text-center block hover:text-hover-highlight duration-100"
      >
        Noah Zaranka
      </Link>
      <Link
        to="/resume"
        className="mt-6 text-header-white text-xl font-normal mx-auto w-full block text-left hover:text-hover-highlight border-b-2 pb-4 duration-100"
      >
        Resume
      </Link>
      <div className=" item-direction-for-left-scrollbar">
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

export default Sidebar
