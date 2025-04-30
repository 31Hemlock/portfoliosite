import React from 'react'
import SidePop from '../SidePop'
import { Link } from 'react-router-dom'
import { sideNames, sideLinks, sideDetails } from '../data/SidebarData'
import { useSidebarMaxWidth } from '@/components/utils/useSidebarMaxWidth'

interface SidebarProps {
  sidebarHidden: boolean
  setSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ sidebarHidden, setSidebarHidden }: SidebarProps) => {
  const maxWidth = useSidebarMaxWidth()

  return (
    <div
      className="overflow-hidden transition-all duration-500 ease-in-out flex-shrink-0"
      style={{
        maxWidth: sidebarHidden ? '0px' : maxWidth,
        width: sidebarHidden ? '0px' : maxWidth,
      }}
    >
      <div
        className="w-full h-full bg-sidebar-base"
        style={{ width: maxWidth }}
      >
        <div
          className={`
              item-direction-for-left-scrollbar
              transition-all duration-[400ms] ease-in-out px-10 py-20 sm:p-14 grid
              ${sidebarHidden ? 'grid-rows-[0fr] opacity-0 blur-xl' : 'grid-rows-[1fr] opacity-100 blur-none'}
            `}
        >
          <div className="overflow-hidden">
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
            <div>
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
        </div>
      </div>
    </div>
  )
}

export default Sidebar
