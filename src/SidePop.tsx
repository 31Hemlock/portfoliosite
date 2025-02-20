import React, { Component } from 'react'
import { tsPropertySignature } from '@babel/types'
import { Link } from 'react-router-dom'

interface SidePopProps {
  subtitles: string[]
  numTitles: number
  title: string
  links: string[]
  mobileShowMenu?: boolean
  setMobileShowMenu?: React.Dispatch<React.SetStateAction<boolean>>
  isMobile: boolean | undefined
}

const SidePop: React.FC<SidePopProps> = ({
  subtitles,
  title,
  links,
  mobileShowMenu,
  setMobileShowMenu,
  isMobile,
}) => {
  let listItems = subtitles.map((subtitle, index) => (
    <Link
      className="text-subheader-white block w-full py-4 border-b border-sidebar-border mx-auto animateButton transition-all text-center last:border-b-2"
      key={subtitle}
      onClick={() => {
        if (typeof setMobileShowMenu === 'function') {
          setMobileShowMenu(false)
        }
      }}
      to={`${links[index]}`}
    >
      {subtitle}
    </Link>
  ))

  if (!isMobile) {
    return (
      <div>
        <div>
          <h5 className="text-header-white block w-full border-b py-4 text-lg ">
            {title}
          </h5>
          <div className="text-subheader-white font-normal block w-full text-sm font-thin">
            {listItems}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <h5 className="text-header-white block w-full border-b py-4 text-lg ">
            {title}
          </h5>
          <div className="text-subheader-white font-normal block w-full text-sm font-extralight">
            {listItems}
          </div>
        </div>
      </div>
    )
  }
}

export default SidePop
