import React, { ReactNode } from 'react'

interface SBProps {
  children: ReactNode
}

export const SB: React.FC<SBProps> = ({ children }) => {
  return <b className="font-semibold">{children}</b>
}
