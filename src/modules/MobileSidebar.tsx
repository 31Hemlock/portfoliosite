import React from 'react'
import SidePop from '../SidePop'
import { Link } from 'react-router-dom'
import { sideNames, sideLinks, sideDetails } from '../data/SidebarData'

interface MobileSidebarProps {
  setMobileShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  mobileShowMenu: boolean
}

// Each header should be a link as well, should explain general proficiencies with the technology or thing
const MobileSidebar: React.FC<MobileSidebarProps> = ({
  mobileShowMenu,
  setMobileShowMenu,
}) => {
  const toggleMobileShowMenu = () => {
    setMobileShowMenu(!mobileShowMenu)
  }
  const threeBarsUrl = new URL(
    '../assets/img/icon/threeBars.svg',
    import.meta.url
  ).href
  return (
    <div className="w-full py-6">
      <div
        className="p-6 pt-3 right-0 cursor-pointer w-fit absolute"
        onClick={() => toggleMobileShowMenu()}
      >
        {' '}
        {/* Clickable area of the menu */}
        <img className=" w-8 h-8  " src={threeBarsUrl} alt="Menu" />
      </div>
      <div className="w-full mx-auto px-6 py-2">
        <Link
          to="/"
          className="text-header-white mx-auto text-center block text-3xl  hover:text-hover-highlight w-max duration-100"
          onClick={() => setMobileShowMenu(false)}
        >
          Noah Zaranka
        </Link>
      </div>
      <div
        className={`px-16 grid transition-all duration-[400] ${mobileShowMenu ? 'grid-rows-[1fr] opacity-100 blur-none' : 'grid-rows-[0fr] opacity-0 blur-xl'}`}
      >
        <div className="overflow-hidden">
          <Link
            to="/resume"
            className="text-header-white text-left block text-xl hover:text-hover-highlight border-b-2 duration-100 pb-4 pt-2 w-full"
            onClick={() => setMobileShowMenu(false)}
          >
            Resume
          </Link>
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
    </div>
  )
}

export default MobileSidebar
