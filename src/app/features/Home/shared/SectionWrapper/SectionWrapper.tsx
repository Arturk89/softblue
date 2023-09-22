import React from 'react'
import './index.scss'

type Props = {
  children: React.ReactNode
  isDark?: boolean
}

export function SectionWrapper({ children, isDark }: Props) {
  return (
    <section
      className={`sectionWrapper ${
        isDark ? `backgroundDark` : `backgroundLight`
      }`}
    >
      {children}
    </section>
  )
}
